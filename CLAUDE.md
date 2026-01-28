# CLAUDE.md

This file provides guidance for AI assistants (like Claude) working with this repository.

## Project Overview

**Repository:** ttevans23/Claude
**Status:** New project - initial setup

This is a newly initialized repository. Update this section as the project develops to include:
- Project purpose and goals
- Target audience/users
- Key features and functionality

## Codebase Structure

```
/home/user/Claude/
├── CLAUDE.md          # AI assistant guidance (this file)
└── .git/              # Git repository
```

As the project grows, update this structure diagram to reflect the actual organization:
- `/src/` - Source code
- `/tests/` - Test files
- `/docs/` - Documentation
- `/config/` - Configuration files

## Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies (update with actual commands when applicable)
3. Set up development environment

### Branch Strategy

- **Main branch:** Production-ready code
- **Feature branches:** Use `feature/description` naming convention
- **Bug fix branches:** Use `fix/description` naming convention
- **Claude branches:** AI-generated changes use `claude/` prefix

### Commit Conventions

Follow conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Test additions/modifications
- `chore:` - Maintenance tasks

Example: `feat: add user authentication module`

### Pull Request Guidelines

1. Create descriptive PR titles
2. Include a summary of changes
3. Reference related issues
4. Ensure all tests pass before merging

## Key Conventions

### Code Style

Document project-specific coding standards here:
- Language-specific style guides
- Naming conventions
- File organization patterns

### Testing

Document testing approach:
- Test framework(s) used
- Test file naming conventions
- Coverage requirements

### Documentation

- Keep README.md updated with setup instructions
- Document APIs and public interfaces
- Include inline comments for complex logic

## AI Assistant Guidelines

When working with this repository, AI assistants should:

### Before Making Changes

1. **Read existing code** before modifying - understand the context
2. **Check for existing patterns** - follow established conventions
3. **Review related files** - understand dependencies and impacts

### When Writing Code

1. **Keep changes focused** - only modify what's necessary
2. **Avoid over-engineering** - simple solutions are preferred
3. **Maintain consistency** - match existing code style
4. **Don't add unnecessary features** - stick to the requested task

### Security Considerations

- Never commit secrets, API keys, or credentials
- Validate user input at system boundaries
- Follow secure coding practices
- Report potential security issues

### After Making Changes

1. Verify changes work as expected
2. Run tests if available
3. Create clear commit messages
4. Update documentation if needed

## Common Commands

Update this section with frequently used commands:

```bash
# Example commands (replace with actual project commands)
# npm install          # Install dependencies
# npm run dev          # Start development server
# npm run test         # Run tests
# npm run build        # Build for production
```

## Environment Setup

Document environment requirements:
- Required software versions
- Environment variables
- Configuration files needed

## Troubleshooting

Common issues and solutions:
- (Add as issues are discovered)

## Resources

- Project documentation: (add links)
- Related repositories: (add links)
- External dependencies documentation: (add links)

---

*Last updated: 2026-01-28*

*This file should be updated as the project evolves to reflect current practices and structure.*
