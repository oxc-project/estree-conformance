__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 29,
            "end": 30
          },
          "definite": false,
          "start": 25,
          "end": 30
        }
      ],
      "declare": false,
      "start": 19,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "exportKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 20,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 48
          },
          "start": 41,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.mjs",
        "raw": "\"./index.mjs\"",
        "start": 54,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 68
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "start": 76,
          "end": 83
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.cjs",
        "raw": "\"./index.cjs\"",
        "start": 89,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 69,
      "end": 103
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 118
          },
          "start": 111,
          "end": 118
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 124,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 104,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "start": 155,
          "end": 162
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.mjs",
        "raw": "\"./subfolder/index.mjs\"",
        "start": 168,
        "end": 191
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 192
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "start": 200,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.cjs",
        "raw": "\"./subfolder/index.cjs\"",
        "start": 213,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 193,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m7",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.js",
        "raw": "\"./subfolder2/index.js\"",
        "start": 258,
        "end": 281
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 282
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m8",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 297
          },
          "start": 290,
          "end": 297
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.mjs",
        "raw": "\"./subfolder2/index.mjs\"",
        "start": 303,
        "end": 327
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 283,
      "end": 328
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m9",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 343
          },
          "start": 336,
          "end": 343
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.cjs",
        "raw": "\"./subfolder2/index.cjs\"",
        "start": 349,
        "end": 373
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 329,
      "end": 374
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m10",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "start": 382,
          "end": 390
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.js",
        "raw": "\"./subfolder2/another/index.js\"",
        "start": 396,
        "end": 427
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 375,
      "end": 428
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m11",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 444
          },
          "start": 436,
          "end": 444
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.mjs",
        "raw": "\"./subfolder2/another/index.mjs\"",
        "start": 450,
        "end": 482
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 429,
      "end": 483
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m12",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 499
          },
          "start": 491,
          "end": 499
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.cjs",
        "raw": "\"./subfolder2/another/index.cjs\"",
        "start": 505,
        "end": 537
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 484,
      "end": 538
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m13",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 658
          },
          "start": 650,
          "end": 658
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 664,
        "end": 668
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 643,
      "end": 669
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m14",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 685
          },
          "start": 677,
          "end": 685
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index",
        "raw": "\"./index\"",
        "start": 691,
        "end": 700
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 670,
      "end": 701
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m15",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 717
          },
          "start": 709,
          "end": 717
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder",
        "raw": "\"./subfolder\"",
        "start": 723,
        "end": 736
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 702,
      "end": 737
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m16",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 753
          },
          "start": 745,
          "end": 753
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/",
        "raw": "\"./subfolder/\"",
        "start": 759,
        "end": 773
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 738,
      "end": 774
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m17",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 790
          },
          "start": 782,
          "end": 790
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index",
        "raw": "\"./subfolder/index\"",
        "start": 796,
        "end": 815
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 775,
      "end": 816
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m18",
            "optional": false,
            "typeAnnotation": null,
            "start": 829,
            "end": 832
          },
          "start": 824,
          "end": 832
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2",
        "raw": "\"./subfolder2\"",
        "start": 838,
        "end": 852
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 817,
      "end": 853
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m19",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 869
          },
          "start": 861,
          "end": 869
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/",
        "raw": "\"./subfolder2/\"",
        "start": 875,
        "end": 890
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 854,
      "end": 891
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m20",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 907
          },
          "start": 899,
          "end": 907
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index",
        "raw": "\"./subfolder2/index\"",
        "start": 913,
        "end": 933
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 892,
      "end": 934
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m21",
            "optional": false,
            "typeAnnotation": null,
            "start": 947,
            "end": 950
          },
          "start": 942,
          "end": 950
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another",
        "raw": "\"./subfolder2/another\"",
        "start": 956,
        "end": 978
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 935,
      "end": 979
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m22",
            "optional": false,
            "typeAnnotation": null,
            "start": 992,
            "end": 995
          },
          "start": 987,
          "end": 995
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/",
        "raw": "\"./subfolder2/another/\"",
        "start": 1001,
        "end": 1024
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 980,
      "end": 1025
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1038,
            "end": 1041
          },
          "start": 1033,
          "end": 1041
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index",
        "raw": "\"./subfolder2/another/index\"",
        "start": 1047,
        "end": 1075
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1026,
      "end": 1076
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1084
        },
        "prefix": true,
        "start": 1077,
        "end": 1084
      },
      "directive": null,
      "start": 1077,
      "end": 1085
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1091,
          "end": 1093
        },
        "prefix": true,
        "start": 1086,
        "end": 1093
      },
      "directive": null,
      "start": 1086,
      "end": 1094
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1100,
          "end": 1102
        },
        "prefix": true,
        "start": 1095,
        "end": 1102
      },
      "directive": null,
      "start": 1095,
      "end": 1103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1111
        },
        "prefix": true,
        "start": 1104,
        "end": 1111
      },
      "directive": null,
      "start": 1104,
      "end": 1112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1118,
          "end": 1120
        },
        "prefix": true,
        "start": 1113,
        "end": 1120
      },
      "directive": null,
      "start": 1113,
      "end": 1121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1129
        },
        "prefix": true,
        "start": 1122,
        "end": 1129
      },
      "directive": null,
      "start": 1122,
      "end": 1130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1138
        },
        "prefix": true,
        "start": 1131,
        "end": 1138
      },
      "directive": null,
      "start": 1131,
      "end": 1139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1145,
          "end": 1147
        },
        "prefix": true,
        "start": 1140,
        "end": 1147
      },
      "directive": null,
      "start": 1140,
      "end": 1148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1156
        },
        "prefix": true,
        "start": 1149,
        "end": 1156
      },
      "directive": null,
      "start": 1149,
      "end": 1157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1163,
          "end": 1166
        },
        "prefix": true,
        "start": 1158,
        "end": 1166
      },
      "directive": null,
      "start": 1158,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1176
        },
        "prefix": true,
        "start": 1168,
        "end": 1176
      },
      "directive": null,
      "start": 1168,
      "end": 1177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1183,
          "end": 1186
        },
        "prefix": true,
        "start": 1178,
        "end": 1186
      },
      "directive": null,
      "start": 1178,
      "end": 1187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1193,
          "end": 1196
        },
        "prefix": true,
        "start": 1188,
        "end": 1196
      },
      "directive": null,
      "start": 1188,
      "end": 1197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m14",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1206
        },
        "prefix": true,
        "start": 1198,
        "end": 1206
      },
      "directive": null,
      "start": 1198,
      "end": 1207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1213,
          "end": 1216
        },
        "prefix": true,
        "start": 1208,
        "end": 1216
      },
      "directive": null,
      "start": 1208,
      "end": 1217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1223,
          "end": 1226
        },
        "prefix": true,
        "start": 1218,
        "end": 1226
      },
      "directive": null,
      "start": 1218,
      "end": 1227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1236
        },
        "prefix": true,
        "start": 1228,
        "end": 1236
      },
      "directive": null,
      "start": 1228,
      "end": 1237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1246
        },
        "prefix": true,
        "start": 1238,
        "end": 1246
      },
      "directive": null,
      "start": 1238,
      "end": 1247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m19",
          "optional": false,
          "typeAnnotation": null,
          "start": 1253,
          "end": 1256
        },
        "prefix": true,
        "start": 1248,
        "end": 1256
      },
      "directive": null,
      "start": 1248,
      "end": 1257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1263,
          "end": 1266
        },
        "prefix": true,
        "start": 1258,
        "end": 1266
      },
      "directive": null,
      "start": 1258,
      "end": 1267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m21",
          "optional": false,
          "typeAnnotation": null,
          "start": 1273,
          "end": 1276
        },
        "prefix": true,
        "start": 1268,
        "end": 1276
      },
      "directive": null,
      "start": 1268,
      "end": 1277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m22",
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1286
        },
        "prefix": true,
        "start": 1278,
        "end": 1286
      },
      "directive": null,
      "start": 1278,
      "end": 1287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1293,
          "end": 1296
        },
        "prefix": true,
        "start": 1288,
        "end": 1296
      },
      "directive": null,
      "start": 1288,
      "end": 1297
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1484,
        "end": 1487
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./",
          "raw": "\"./\"",
          "start": 1498,
          "end": 1502
        },
        "start": 1490,
        "end": 1503
      },
      "importKind": "value",
      "start": 1477,
      "end": 1504
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m25",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1515
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index",
          "raw": "\"./index\"",
          "start": 1526,
          "end": 1535
        },
        "start": 1518,
        "end": 1536
      },
      "importKind": "value",
      "start": 1505,
      "end": 1537
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m26",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1548
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder",
          "raw": "\"./subfolder\"",
          "start": 1559,
          "end": 1572
        },
        "start": 1551,
        "end": 1573
      },
      "importKind": "value",
      "start": 1538,
      "end": 1574
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m27",
        "optional": false,
        "typeAnnotation": null,
        "start": 1582,
        "end": 1585
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/",
          "raw": "\"./subfolder/\"",
          "start": 1596,
          "end": 1610
        },
        "start": 1588,
        "end": 1611
      },
      "importKind": "value",
      "start": 1575,
      "end": 1612
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m28",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1623
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/index",
          "raw": "\"./subfolder/index\"",
          "start": 1634,
          "end": 1653
        },
        "start": 1626,
        "end": 1654
      },
      "importKind": "value",
      "start": 1613,
      "end": 1655
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m29",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1666
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2",
          "raw": "\"./subfolder2\"",
          "start": 1677,
          "end": 1691
        },
        "start": 1669,
        "end": 1692
      },
      "importKind": "value",
      "start": 1656,
      "end": 1693
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1701,
        "end": 1704
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/",
          "raw": "\"./subfolder2/\"",
          "start": 1715,
          "end": 1730
        },
        "start": 1707,
        "end": 1731
      },
      "importKind": "value",
      "start": 1694,
      "end": 1732
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1740,
        "end": 1743
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/index",
          "raw": "\"./subfolder2/index\"",
          "start": 1754,
          "end": 1774
        },
        "start": 1746,
        "end": 1775
      },
      "importKind": "value",
      "start": 1733,
      "end": 1776
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m32",
        "optional": false,
        "typeAnnotation": null,
        "start": 1784,
        "end": 1787
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another",
          "raw": "\"./subfolder2/another\"",
          "start": 1798,
          "end": 1820
        },
        "start": 1790,
        "end": 1821
      },
      "importKind": "value",
      "start": 1777,
      "end": 1822
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1830,
        "end": 1833
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/",
          "raw": "\"./subfolder2/another/\"",
          "start": 1844,
          "end": 1867
        },
        "start": 1836,
        "end": 1868
      },
      "importKind": "value",
      "start": 1823,
      "end": 1869
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m34",
        "optional": false,
        "typeAnnotation": null,
        "start": 1877,
        "end": 1880
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/index",
          "raw": "\"./subfolder2/another/index\"",
          "start": 1891,
          "end": 1919
        },
        "start": 1883,
        "end": 1920
      },
      "importKind": "value",
      "start": 1870,
      "end": 1921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m24",
          "optional": false,
          "typeAnnotation": null,
          "start": 1927,
          "end": 1930
        },
        "prefix": true,
        "start": 1922,
        "end": 1930
      },
      "directive": null,
      "start": 1922,
      "end": 1931
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m25",
          "optional": false,
          "typeAnnotation": null,
          "start": 1937,
          "end": 1940
        },
        "prefix": true,
        "start": 1932,
        "end": 1940
      },
      "directive": null,
      "start": 1932,
      "end": 1941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m26",
          "optional": false,
          "typeAnnotation": null,
          "start": 1947,
          "end": 1950
        },
        "prefix": true,
        "start": 1942,
        "end": 1950
      },
      "directive": null,
      "start": 1942,
      "end": 1951
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m27",
          "optional": false,
          "typeAnnotation": null,
          "start": 1957,
          "end": 1960
        },
        "prefix": true,
        "start": 1952,
        "end": 1960
      },
      "directive": null,
      "start": 1952,
      "end": 1961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m28",
          "optional": false,
          "typeAnnotation": null,
          "start": 1967,
          "end": 1970
        },
        "prefix": true,
        "start": 1962,
        "end": 1970
      },
      "directive": null,
      "start": 1962,
      "end": 1971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m29",
          "optional": false,
          "typeAnnotation": null,
          "start": 1977,
          "end": 1980
        },
        "prefix": true,
        "start": 1972,
        "end": 1980
      },
      "directive": null,
      "start": 1972,
      "end": 1981
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m30",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1990
        },
        "prefix": true,
        "start": 1982,
        "end": 1990
      },
      "directive": null,
      "start": 1982,
      "end": 1991
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m31",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 2000
        },
        "prefix": true,
        "start": 1992,
        "end": 2000
      },
      "directive": null,
      "start": 1992,
      "end": 2001
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m32",
          "optional": false,
          "typeAnnotation": null,
          "start": 2007,
          "end": 2010
        },
        "prefix": true,
        "start": 2002,
        "end": 2010
      },
      "directive": null,
      "start": 2002,
      "end": 2011
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m33",
          "optional": false,
          "typeAnnotation": null,
          "start": 2017,
          "end": 2020
        },
        "prefix": true,
        "start": 2012,
        "end": 2020
      },
      "directive": null,
      "start": 2012,
      "end": 2021
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m34",
          "optional": false,
          "typeAnnotation": null,
          "start": 2027,
          "end": 2030
        },
        "prefix": true,
        "start": 2022,
        "end": 2030
      },
      "directive": null,
      "start": 2022,
      "end": 2031
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m35",
            "optional": false,
            "typeAnnotation": null,
            "start": 2155,
            "end": 2159
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./",
              "raw": "\"./\"",
              "start": 2169,
              "end": 2173
            },
            "options": null,
            "phase": null,
            "start": 2162,
            "end": 2174
          },
          "definite": false,
          "start": 2155,
          "end": 2174
        }
      ],
      "declare": false,
      "start": 2149,
      "end": 2175
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m36",
            "optional": false,
            "typeAnnotation": null,
            "start": 2182,
            "end": 2186
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./index",
              "raw": "\"./index\"",
              "start": 2196,
              "end": 2205
            },
            "options": null,
            "phase": null,
            "start": 2189,
            "end": 2206
          },
          "definite": false,
          "start": 2182,
          "end": 2206
        }
      ],
      "declare": false,
      "start": 2176,
      "end": 2207
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m37",
            "optional": false,
            "typeAnnotation": null,
            "start": 2214,
            "end": 2218
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder",
              "raw": "\"./subfolder\"",
              "start": 2228,
              "end": 2241
            },
            "options": null,
            "phase": null,
            "start": 2221,
            "end": 2242
          },
          "definite": false,
          "start": 2214,
          "end": 2242
        }
      ],
      "declare": false,
      "start": 2208,
      "end": 2243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m38",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2254
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/",
              "raw": "\"./subfolder/\"",
              "start": 2264,
              "end": 2278
            },
            "options": null,
            "phase": null,
            "start": 2257,
            "end": 2279
          },
          "definite": false,
          "start": 2250,
          "end": 2279
        }
      ],
      "declare": false,
      "start": 2244,
      "end": 2280
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m39",
            "optional": false,
            "typeAnnotation": null,
            "start": 2287,
            "end": 2291
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/index",
              "raw": "\"./subfolder/index\"",
              "start": 2301,
              "end": 2320
            },
            "options": null,
            "phase": null,
            "start": 2294,
            "end": 2321
          },
          "definite": false,
          "start": 2287,
          "end": 2321
        }
      ],
      "declare": false,
      "start": 2281,
      "end": 2322
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2329,
            "end": 2333
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2",
              "raw": "\"./subfolder2\"",
              "start": 2343,
              "end": 2357
            },
            "options": null,
            "phase": null,
            "start": 2336,
            "end": 2358
          },
          "definite": false,
          "start": 2329,
          "end": 2358
        }
      ],
      "declare": false,
      "start": 2323,
      "end": 2359
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2366,
            "end": 2370
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/",
              "raw": "\"./subfolder2/\"",
              "start": 2380,
              "end": 2395
            },
            "options": null,
            "phase": null,
            "start": 2373,
            "end": 2396
          },
          "definite": false,
          "start": 2366,
          "end": 2396
        }
      ],
      "declare": false,
      "start": 2360,
      "end": 2397
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m42",
            "optional": false,
            "typeAnnotation": null,
            "start": 2404,
            "end": 2408
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/index",
              "raw": "\"./subfolder2/index\"",
              "start": 2418,
              "end": 2438
            },
            "options": null,
            "phase": null,
            "start": 2411,
            "end": 2439
          },
          "definite": false,
          "start": 2404,
          "end": 2439
        }
      ],
      "declare": false,
      "start": 2398,
      "end": 2440
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m43",
            "optional": false,
            "typeAnnotation": null,
            "start": 2447,
            "end": 2451
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another",
              "raw": "\"./subfolder2/another\"",
              "start": 2461,
              "end": 2483
            },
            "options": null,
            "phase": null,
            "start": 2454,
            "end": 2484
          },
          "definite": false,
          "start": 2447,
          "end": 2484
        }
      ],
      "declare": false,
      "start": 2441,
      "end": 2485
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m44",
            "optional": false,
            "typeAnnotation": null,
            "start": 2492,
            "end": 2496
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/",
              "raw": "\"./subfolder2/another/\"",
              "start": 2506,
              "end": 2529
            },
            "options": null,
            "phase": null,
            "start": 2499,
            "end": 2530
          },
          "definite": false,
          "start": 2492,
          "end": 2530
        }
      ],
      "declare": false,
      "start": 2486,
      "end": 2531
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m45",
            "optional": false,
            "typeAnnotation": null,
            "start": 2538,
            "end": 2542
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/index",
              "raw": "\"./subfolder2/another/index\"",
              "start": 2552,
              "end": 2580
            },
            "options": null,
            "phase": null,
            "start": 2545,
            "end": 2581
          },
          "definite": false,
          "start": 2538,
          "end": 2581
        }
      ],
      "declare": false,
      "start": 2532,
      "end": 2582
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2608,
            "end": 2609
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2612,
            "end": 2613
          },
          "definite": false,
          "start": 2608,
          "end": 2613
        }
      ],
      "declare": false,
      "start": 2602,
      "end": 2614
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2623,
            "end": 2624
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2623,
            "end": 2624
          },
          "exportKind": "value",
          "start": 2623,
          "end": 2624
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2615,
      "end": 2626
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2626
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 20,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"./index.mjs\"",
    "start": 54,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 81,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 84,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"./index.cjs\"",
    "start": 89,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 119,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 124,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 163,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.mjs\"",
    "start": 168,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 202,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.cjs\"",
    "start": 213,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 253,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.js\"",
    "start": 258,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 298,
    "end": 302
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.mjs\"",
    "start": 303,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 341,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 344,
    "end": 348
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.cjs\"",
    "start": 349,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 391,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.js\"",
    "start": 396,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 438,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 445,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.mjs\"",
    "start": 450,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 500,
    "end": 504
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.cjs\"",
    "start": 505,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 652,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 655,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 659,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 679,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 686,
    "end": 690
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 691,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 711,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 718,
    "end": 722
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 723,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 747,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 750,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 754,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 759,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 784,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 791,
    "end": 795
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 796,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 817,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 826,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 829,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 833,
    "end": 837
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 838,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 863,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 870,
    "end": 874
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 875,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 892,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 901,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 908,
    "end": 912
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 913,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 944,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 947,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 951,
    "end": 955
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 956,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 980,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 989,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 996,
    "end": 1000
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 1001,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1047,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1077,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1091,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1095,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1131,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1218,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1268,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1278,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1490,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 1498,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1505,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1512,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1518,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 1526,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 1559,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1588,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 1596,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1626,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 1634,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1656,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 1677,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1694,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1707,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 1715,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 1740,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1746,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 1754,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1777,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1790,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 1798,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1823,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1836,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 1844,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1870,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1883,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1891,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1922,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1932,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1942,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 1947,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1952,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 1957,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1962,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 1967,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1972,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 1977,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1982,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 1987,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1992,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 1997,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2002,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2012,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 2017,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2022,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2149,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "_m35",
    "start": 2155,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2162,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 2169,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2176,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "_m36",
    "start": 2182,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2189,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 2196,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2208,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "_m37",
    "start": 2214,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 2228,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2244,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "_m38",
    "start": 2250,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2257,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 2264,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2281,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "_m39",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2294,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 2301,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2323,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "_m40",
    "start": 2329,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 2343,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2360,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "_m41",
    "start": 2366,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2373,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 2380,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2398,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "_m42",
    "start": 2404,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 2418,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2441,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "_m43",
    "start": 2447,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 2461,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2486,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "_m44",
    "start": 2492,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2499,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 2506,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2532,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "_m45",
    "start": 2538,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2545,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 2552,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2602,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2615,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2625,
    "end": 2626
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 62
          },
          "start": 55,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 68,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 81
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "start": 89,
          "end": 96
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.mjs",
        "raw": "\"./index.mjs\"",
        "start": 102,
        "end": 115
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 82,
      "end": 116
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
          },
          "start": 124,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.cjs",
        "raw": "\"./index.cjs\"",
        "start": 137,
        "end": 150
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 117,
      "end": 151
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 166
          },
          "start": 159,
          "end": 166
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 172,
        "end": 194
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 152,
      "end": 195
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 210
          },
          "start": 203,
          "end": 210
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.mjs",
        "raw": "\"./subfolder/index.mjs\"",
        "start": 216,
        "end": 239
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 196,
      "end": 240
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 255
          },
          "start": 248,
          "end": 255
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.cjs",
        "raw": "\"./subfolder/index.cjs\"",
        "start": 261,
        "end": 284
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 241,
      "end": 285
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m7",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          },
          "start": 293,
          "end": 300
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.js",
        "raw": "\"./subfolder2/index.js\"",
        "start": 306,
        "end": 329
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 286,
      "end": 330
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m8",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 345
          },
          "start": 338,
          "end": 345
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.mjs",
        "raw": "\"./subfolder2/index.mjs\"",
        "start": 351,
        "end": 375
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 331,
      "end": 376
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m9",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 391
          },
          "start": 384,
          "end": 391
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.cjs",
        "raw": "\"./subfolder2/index.cjs\"",
        "start": 397,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 377,
      "end": 422
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m10",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 438
          },
          "start": 430,
          "end": 438
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.js",
        "raw": "\"./subfolder2/another/index.js\"",
        "start": 444,
        "end": 475
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 423,
      "end": 476
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m11",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 492
          },
          "start": 484,
          "end": 492
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.mjs",
        "raw": "\"./subfolder2/another/index.mjs\"",
        "start": 498,
        "end": 530
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 477,
      "end": 531
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m12",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 547
          },
          "start": 539,
          "end": 547
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.cjs",
        "raw": "\"./subfolder2/another/index.cjs\"",
        "start": 553,
        "end": 585
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 532,
      "end": 586
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m13",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 761
          },
          "start": 753,
          "end": 761
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 767,
        "end": 771
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 746,
      "end": 772
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m14",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 788
          },
          "start": 780,
          "end": 788
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index",
        "raw": "\"./index\"",
        "start": 794,
        "end": 803
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 773,
      "end": 804
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m15",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 820
          },
          "start": 812,
          "end": 820
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder",
        "raw": "\"./subfolder\"",
        "start": 826,
        "end": 839
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 805,
      "end": 840
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m16",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 856
          },
          "start": 848,
          "end": 856
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/",
        "raw": "\"./subfolder/\"",
        "start": 862,
        "end": 876
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 841,
      "end": 877
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m17",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 893
          },
          "start": 885,
          "end": 893
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index",
        "raw": "\"./subfolder/index\"",
        "start": 899,
        "end": 918
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 878,
      "end": 919
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m18",
            "optional": false,
            "typeAnnotation": null,
            "start": 932,
            "end": 935
          },
          "start": 927,
          "end": 935
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2",
        "raw": "\"./subfolder2\"",
        "start": 941,
        "end": 955
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 920,
      "end": 956
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m19",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 972
          },
          "start": 964,
          "end": 972
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/",
        "raw": "\"./subfolder2/\"",
        "start": 978,
        "end": 993
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 957,
      "end": 994
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1010
          },
          "start": 1002,
          "end": 1010
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index",
        "raw": "\"./subfolder2/index\"",
        "start": 1016,
        "end": 1036
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 995,
      "end": 1037
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1053
          },
          "start": 1045,
          "end": 1053
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another",
        "raw": "\"./subfolder2/another\"",
        "start": 1059,
        "end": 1081
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1038,
      "end": 1082
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1098
          },
          "start": 1090,
          "end": 1098
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/",
        "raw": "\"./subfolder2/another/\"",
        "start": 1104,
        "end": 1127
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1083,
      "end": 1128
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1144
          },
          "start": 1136,
          "end": 1144
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index",
        "raw": "\"./subfolder2/another/index\"",
        "start": 1150,
        "end": 1178
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1129,
      "end": 1179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1187
        },
        "prefix": true,
        "start": 1180,
        "end": 1187
      },
      "directive": null,
      "start": 1180,
      "end": 1188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1196
        },
        "prefix": true,
        "start": 1189,
        "end": 1196
      },
      "directive": null,
      "start": 1189,
      "end": 1197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1205
        },
        "prefix": true,
        "start": 1198,
        "end": 1205
      },
      "directive": null,
      "start": 1198,
      "end": 1206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1214
        },
        "prefix": true,
        "start": 1207,
        "end": 1214
      },
      "directive": null,
      "start": 1207,
      "end": 1215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1221,
          "end": 1223
        },
        "prefix": true,
        "start": 1216,
        "end": 1223
      },
      "directive": null,
      "start": 1216,
      "end": 1224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1230,
          "end": 1232
        },
        "prefix": true,
        "start": 1225,
        "end": 1232
      },
      "directive": null,
      "start": 1225,
      "end": 1233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1239,
          "end": 1241
        },
        "prefix": true,
        "start": 1234,
        "end": 1241
      },
      "directive": null,
      "start": 1234,
      "end": 1242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1248,
          "end": 1250
        },
        "prefix": true,
        "start": 1243,
        "end": 1250
      },
      "directive": null,
      "start": 1243,
      "end": 1251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1259
        },
        "prefix": true,
        "start": 1252,
        "end": 1259
      },
      "directive": null,
      "start": 1252,
      "end": 1260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1269
        },
        "prefix": true,
        "start": 1261,
        "end": 1269
      },
      "directive": null,
      "start": 1261,
      "end": 1270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1279
        },
        "prefix": true,
        "start": 1271,
        "end": 1279
      },
      "directive": null,
      "start": 1271,
      "end": 1280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1289
        },
        "prefix": true,
        "start": 1281,
        "end": 1289
      },
      "directive": null,
      "start": 1281,
      "end": 1290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1296,
          "end": 1299
        },
        "prefix": true,
        "start": 1291,
        "end": 1299
      },
      "directive": null,
      "start": 1291,
      "end": 1300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m14",
          "optional": false,
          "typeAnnotation": null,
          "start": 1306,
          "end": 1309
        },
        "prefix": true,
        "start": 1301,
        "end": 1309
      },
      "directive": null,
      "start": 1301,
      "end": 1310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1316,
          "end": 1319
        },
        "prefix": true,
        "start": 1311,
        "end": 1319
      },
      "directive": null,
      "start": 1311,
      "end": 1320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1326,
          "end": 1329
        },
        "prefix": true,
        "start": 1321,
        "end": 1329
      },
      "directive": null,
      "start": 1321,
      "end": 1330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1336,
          "end": 1339
        },
        "prefix": true,
        "start": 1331,
        "end": 1339
      },
      "directive": null,
      "start": 1331,
      "end": 1340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1349
        },
        "prefix": true,
        "start": 1341,
        "end": 1349
      },
      "directive": null,
      "start": 1341,
      "end": 1350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m19",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1359
        },
        "prefix": true,
        "start": 1351,
        "end": 1359
      },
      "directive": null,
      "start": 1351,
      "end": 1360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1366,
          "end": 1369
        },
        "prefix": true,
        "start": 1361,
        "end": 1369
      },
      "directive": null,
      "start": 1361,
      "end": 1370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m21",
          "optional": false,
          "typeAnnotation": null,
          "start": 1376,
          "end": 1379
        },
        "prefix": true,
        "start": 1371,
        "end": 1379
      },
      "directive": null,
      "start": 1371,
      "end": 1380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m22",
          "optional": false,
          "typeAnnotation": null,
          "start": 1386,
          "end": 1389
        },
        "prefix": true,
        "start": 1381,
        "end": 1389
      },
      "directive": null,
      "start": 1381,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1399
        },
        "prefix": true,
        "start": 1391,
        "end": 1399
      },
      "directive": null,
      "start": 1391,
      "end": 1400
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1590
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./",
          "raw": "\"./\"",
          "start": 1601,
          "end": 1605
        },
        "start": 1593,
        "end": 1606
      },
      "importKind": "value",
      "start": 1580,
      "end": 1607
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m25",
        "optional": false,
        "typeAnnotation": null,
        "start": 1615,
        "end": 1618
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index",
          "raw": "\"./index\"",
          "start": 1629,
          "end": 1638
        },
        "start": 1621,
        "end": 1639
      },
      "importKind": "value",
      "start": 1608,
      "end": 1640
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m26",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1651
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder",
          "raw": "\"./subfolder\"",
          "start": 1662,
          "end": 1675
        },
        "start": 1654,
        "end": 1676
      },
      "importKind": "value",
      "start": 1641,
      "end": 1677
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m27",
        "optional": false,
        "typeAnnotation": null,
        "start": 1685,
        "end": 1688
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/",
          "raw": "\"./subfolder/\"",
          "start": 1699,
          "end": 1713
        },
        "start": 1691,
        "end": 1714
      },
      "importKind": "value",
      "start": 1678,
      "end": 1715
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m28",
        "optional": false,
        "typeAnnotation": null,
        "start": 1723,
        "end": 1726
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/index",
          "raw": "\"./subfolder/index\"",
          "start": 1737,
          "end": 1756
        },
        "start": 1729,
        "end": 1757
      },
      "importKind": "value",
      "start": 1716,
      "end": 1758
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m29",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1769
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2",
          "raw": "\"./subfolder2\"",
          "start": 1780,
          "end": 1794
        },
        "start": 1772,
        "end": 1795
      },
      "importKind": "value",
      "start": 1759,
      "end": 1796
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1804,
        "end": 1807
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/",
          "raw": "\"./subfolder2/\"",
          "start": 1818,
          "end": 1833
        },
        "start": 1810,
        "end": 1834
      },
      "importKind": "value",
      "start": 1797,
      "end": 1835
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1843,
        "end": 1846
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/index",
          "raw": "\"./subfolder2/index\"",
          "start": 1857,
          "end": 1877
        },
        "start": 1849,
        "end": 1878
      },
      "importKind": "value",
      "start": 1836,
      "end": 1879
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m32",
        "optional": false,
        "typeAnnotation": null,
        "start": 1887,
        "end": 1890
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another",
          "raw": "\"./subfolder2/another\"",
          "start": 1901,
          "end": 1923
        },
        "start": 1893,
        "end": 1924
      },
      "importKind": "value",
      "start": 1880,
      "end": 1925
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1936
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/",
          "raw": "\"./subfolder2/another/\"",
          "start": 1947,
          "end": 1970
        },
        "start": 1939,
        "end": 1971
      },
      "importKind": "value",
      "start": 1926,
      "end": 1972
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m34",
        "optional": false,
        "typeAnnotation": null,
        "start": 1980,
        "end": 1983
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/index",
          "raw": "\"./subfolder2/another/index\"",
          "start": 1994,
          "end": 2022
        },
        "start": 1986,
        "end": 2023
      },
      "importKind": "value",
      "start": 1973,
      "end": 2024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m24",
          "optional": false,
          "typeAnnotation": null,
          "start": 2030,
          "end": 2033
        },
        "prefix": true,
        "start": 2025,
        "end": 2033
      },
      "directive": null,
      "start": 2025,
      "end": 2034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m25",
          "optional": false,
          "typeAnnotation": null,
          "start": 2040,
          "end": 2043
        },
        "prefix": true,
        "start": 2035,
        "end": 2043
      },
      "directive": null,
      "start": 2035,
      "end": 2044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m26",
          "optional": false,
          "typeAnnotation": null,
          "start": 2050,
          "end": 2053
        },
        "prefix": true,
        "start": 2045,
        "end": 2053
      },
      "directive": null,
      "start": 2045,
      "end": 2054
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m27",
          "optional": false,
          "typeAnnotation": null,
          "start": 2060,
          "end": 2063
        },
        "prefix": true,
        "start": 2055,
        "end": 2063
      },
      "directive": null,
      "start": 2055,
      "end": 2064
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m28",
          "optional": false,
          "typeAnnotation": null,
          "start": 2070,
          "end": 2073
        },
        "prefix": true,
        "start": 2065,
        "end": 2073
      },
      "directive": null,
      "start": 2065,
      "end": 2074
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m29",
          "optional": false,
          "typeAnnotation": null,
          "start": 2080,
          "end": 2083
        },
        "prefix": true,
        "start": 2075,
        "end": 2083
      },
      "directive": null,
      "start": 2075,
      "end": 2084
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m30",
          "optional": false,
          "typeAnnotation": null,
          "start": 2090,
          "end": 2093
        },
        "prefix": true,
        "start": 2085,
        "end": 2093
      },
      "directive": null,
      "start": 2085,
      "end": 2094
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m31",
          "optional": false,
          "typeAnnotation": null,
          "start": 2100,
          "end": 2103
        },
        "prefix": true,
        "start": 2095,
        "end": 2103
      },
      "directive": null,
      "start": 2095,
      "end": 2104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m32",
          "optional": false,
          "typeAnnotation": null,
          "start": 2110,
          "end": 2113
        },
        "prefix": true,
        "start": 2105,
        "end": 2113
      },
      "directive": null,
      "start": 2105,
      "end": 2114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m33",
          "optional": false,
          "typeAnnotation": null,
          "start": 2120,
          "end": 2123
        },
        "prefix": true,
        "start": 2115,
        "end": 2123
      },
      "directive": null,
      "start": 2115,
      "end": 2124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m34",
          "optional": false,
          "typeAnnotation": null,
          "start": 2130,
          "end": 2133
        },
        "prefix": true,
        "start": 2125,
        "end": 2133
      },
      "directive": null,
      "start": 2125,
      "end": 2134
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m35",
            "optional": false,
            "typeAnnotation": null,
            "start": 2258,
            "end": 2262
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./",
              "raw": "\"./\"",
              "start": 2272,
              "end": 2276
            },
            "options": null,
            "phase": null,
            "start": 2265,
            "end": 2277
          },
          "definite": false,
          "start": 2258,
          "end": 2277
        }
      ],
      "declare": false,
      "start": 2252,
      "end": 2278
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m36",
            "optional": false,
            "typeAnnotation": null,
            "start": 2285,
            "end": 2289
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./index",
              "raw": "\"./index\"",
              "start": 2299,
              "end": 2308
            },
            "options": null,
            "phase": null,
            "start": 2292,
            "end": 2309
          },
          "definite": false,
          "start": 2285,
          "end": 2309
        }
      ],
      "declare": false,
      "start": 2279,
      "end": 2310
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m37",
            "optional": false,
            "typeAnnotation": null,
            "start": 2317,
            "end": 2321
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder",
              "raw": "\"./subfolder\"",
              "start": 2331,
              "end": 2344
            },
            "options": null,
            "phase": null,
            "start": 2324,
            "end": 2345
          },
          "definite": false,
          "start": 2317,
          "end": 2345
        }
      ],
      "declare": false,
      "start": 2311,
      "end": 2346
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m38",
            "optional": false,
            "typeAnnotation": null,
            "start": 2353,
            "end": 2357
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/",
              "raw": "\"./subfolder/\"",
              "start": 2367,
              "end": 2381
            },
            "options": null,
            "phase": null,
            "start": 2360,
            "end": 2382
          },
          "definite": false,
          "start": 2353,
          "end": 2382
        }
      ],
      "declare": false,
      "start": 2347,
      "end": 2383
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m39",
            "optional": false,
            "typeAnnotation": null,
            "start": 2390,
            "end": 2394
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/index",
              "raw": "\"./subfolder/index\"",
              "start": 2404,
              "end": 2423
            },
            "options": null,
            "phase": null,
            "start": 2397,
            "end": 2424
          },
          "definite": false,
          "start": 2390,
          "end": 2424
        }
      ],
      "declare": false,
      "start": 2384,
      "end": 2425
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2432,
            "end": 2436
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2",
              "raw": "\"./subfolder2\"",
              "start": 2446,
              "end": 2460
            },
            "options": null,
            "phase": null,
            "start": 2439,
            "end": 2461
          },
          "definite": false,
          "start": 2432,
          "end": 2461
        }
      ],
      "declare": false,
      "start": 2426,
      "end": 2462
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2469,
            "end": 2473
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/",
              "raw": "\"./subfolder2/\"",
              "start": 2483,
              "end": 2498
            },
            "options": null,
            "phase": null,
            "start": 2476,
            "end": 2499
          },
          "definite": false,
          "start": 2469,
          "end": 2499
        }
      ],
      "declare": false,
      "start": 2463,
      "end": 2500
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m42",
            "optional": false,
            "typeAnnotation": null,
            "start": 2507,
            "end": 2511
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/index",
              "raw": "\"./subfolder2/index\"",
              "start": 2521,
              "end": 2541
            },
            "options": null,
            "phase": null,
            "start": 2514,
            "end": 2542
          },
          "definite": false,
          "start": 2507,
          "end": 2542
        }
      ],
      "declare": false,
      "start": 2501,
      "end": 2543
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m43",
            "optional": false,
            "typeAnnotation": null,
            "start": 2550,
            "end": 2554
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another",
              "raw": "\"./subfolder2/another\"",
              "start": 2564,
              "end": 2586
            },
            "options": null,
            "phase": null,
            "start": 2557,
            "end": 2587
          },
          "definite": false,
          "start": 2550,
          "end": 2587
        }
      ],
      "declare": false,
      "start": 2544,
      "end": 2588
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m44",
            "optional": false,
            "typeAnnotation": null,
            "start": 2595,
            "end": 2599
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/",
              "raw": "\"./subfolder2/another/\"",
              "start": 2609,
              "end": 2632
            },
            "options": null,
            "phase": null,
            "start": 2602,
            "end": 2633
          },
          "definite": false,
          "start": 2595,
          "end": 2633
        }
      ],
      "declare": false,
      "start": 2589,
      "end": 2634
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m45",
            "optional": false,
            "typeAnnotation": null,
            "start": 2641,
            "end": 2645
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/index",
              "raw": "\"./subfolder2/another/index\"",
              "start": 2655,
              "end": 2683
            },
            "options": null,
            "phase": null,
            "start": 2648,
            "end": 2684
          },
          "definite": false,
          "start": 2641,
          "end": 2684
        }
      ],
      "declare": false,
      "start": 2635,
      "end": 2685
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2711,
            "end": 2712
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2715,
            "end": 2716
          },
          "definite": false,
          "start": 2711,
          "end": 2716
        }
      ],
      "declare": false,
      "start": 2705,
      "end": 2717
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2726,
            "end": 2727
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2726,
            "end": 2727
          },
          "exportKind": "value",
          "start": 2726,
          "end": 2727
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2718,
      "end": 2729
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 48,
  "end": 2729
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 68,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 91,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 97,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"./index.mjs\"",
    "start": 102,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 132,
    "end": 136
  },
  {
    "type": "String",
    "value": "\"./index.cjs\"",
    "start": 137,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 164,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 167,
    "end": 171
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 172,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 208,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 211,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.mjs\"",
    "start": 216,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 256,
    "end": 260
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.cjs\"",
    "start": 261,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 301,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.js\"",
    "start": 306,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 343,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 346,
    "end": 350
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.mjs\"",
    "start": 351,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 392,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.cjs\"",
    "start": 397,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 432,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 439,
    "end": 443
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.js\"",
    "start": 444,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 493,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.mjs\"",
    "start": 498,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 548,
    "end": 552
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.cjs\"",
    "start": 553,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 755,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 758,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 762,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 782,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 789,
    "end": 793
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 794,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 814,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 821,
    "end": 825
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 826,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 850,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 853,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 857,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 862,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 887,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 890,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 894,
    "end": 898
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 899,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 929,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 932,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 936,
    "end": 940
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 941,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 966,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 969,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 973,
    "end": 977
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 978,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 995,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1011,
    "end": 1015
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 1016,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1047,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 1059,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 1104,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1150,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1230,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1243,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1281,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1291,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1301,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1331,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1381,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1593,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1608,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1621,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 1629,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1641,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 1662,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1678,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 1685,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1691,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 1699,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1729,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 1737,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1759,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 1780,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 1804,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1810,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 1818,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1836,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 1843,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1849,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 1857,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1880,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 1887,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1893,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 1901,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1926,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1939,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 1947,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1973,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 1980,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1986,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1994,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2025,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2035,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 2040,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 2050,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2065,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 2070,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2075,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 2080,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2085,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 2090,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2095,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 2100,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2105,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 2110,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2115,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2125,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 2130,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2252,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "_m35",
    "start": 2258,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 2272,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "_m36",
    "start": 2285,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2292,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 2299,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2311,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "_m37",
    "start": 2317,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2324,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 2331,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2347,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "_m38",
    "start": 2353,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2360,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 2367,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2384,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "_m39",
    "start": 2390,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2397,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 2404,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2426,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "_m40",
    "start": 2432,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2439,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 2446,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2463,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "_m41",
    "start": 2469,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2476,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 2483,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2501,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "_m42",
    "start": 2507,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2514,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 2521,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2544,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "_m43",
    "start": 2550,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2557,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 2564,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2589,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "_m44",
    "start": 2595,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2602,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 2609,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2635,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "_m45",
    "start": 2641,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2648,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 2655,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2705,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2718,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2728,
    "end": 2729
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 20,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 48
          },
          "start": 41,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.mjs",
        "raw": "\"./index.mjs\"",
        "start": 54,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 68
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "start": 76,
          "end": 83
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.cjs",
        "raw": "\"./index.cjs\"",
        "start": 89,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 69,
      "end": 103
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 118
          },
          "start": 111,
          "end": 118
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 124,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 104,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "start": 155,
          "end": 162
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.mjs",
        "raw": "\"./subfolder/index.mjs\"",
        "start": 168,
        "end": 191
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 192
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "start": 200,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.cjs",
        "raw": "\"./subfolder/index.cjs\"",
        "start": 213,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 193,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m7",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.js",
        "raw": "\"./subfolder2/index.js\"",
        "start": 258,
        "end": 281
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 282
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m8",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 297
          },
          "start": 290,
          "end": 297
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.mjs",
        "raw": "\"./subfolder2/index.mjs\"",
        "start": 303,
        "end": 327
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 283,
      "end": 328
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m9",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 343
          },
          "start": 336,
          "end": 343
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index.cjs",
        "raw": "\"./subfolder2/index.cjs\"",
        "start": 349,
        "end": 373
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 329,
      "end": 374
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m10",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "start": 382,
          "end": 390
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.js",
        "raw": "\"./subfolder2/another/index.js\"",
        "start": 396,
        "end": 427
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 375,
      "end": 428
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m11",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 444
          },
          "start": 436,
          "end": 444
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.mjs",
        "raw": "\"./subfolder2/another/index.mjs\"",
        "start": 450,
        "end": 482
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 429,
      "end": 483
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m12",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 499
          },
          "start": 491,
          "end": 499
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index.cjs",
        "raw": "\"./subfolder2/another/index.cjs\"",
        "start": 505,
        "end": 537
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 484,
      "end": 538
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m13",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 655
          },
          "start": 647,
          "end": 655
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 661,
        "end": 665
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 640,
      "end": 666
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m14",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 682
          },
          "start": 674,
          "end": 682
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index",
        "raw": "\"./index\"",
        "start": 688,
        "end": 697
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 667,
      "end": 698
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m15",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 714
          },
          "start": 706,
          "end": 714
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder",
        "raw": "\"./subfolder\"",
        "start": 720,
        "end": 733
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 699,
      "end": 734
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m16",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 750
          },
          "start": 742,
          "end": 750
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/",
        "raw": "\"./subfolder/\"",
        "start": 756,
        "end": 770
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 735,
      "end": 771
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m17",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 787
          },
          "start": 779,
          "end": 787
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index",
        "raw": "\"./subfolder/index\"",
        "start": 793,
        "end": 812
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 772,
      "end": 813
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m18",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 829
          },
          "start": 821,
          "end": 829
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2",
        "raw": "\"./subfolder2\"",
        "start": 835,
        "end": 849
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 814,
      "end": 850
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m19",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 866
          },
          "start": 858,
          "end": 866
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/",
        "raw": "\"./subfolder2/\"",
        "start": 872,
        "end": 887
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 851,
      "end": 888
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m20",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 904
          },
          "start": 896,
          "end": 904
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/index",
        "raw": "\"./subfolder2/index\"",
        "start": 910,
        "end": 930
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 889,
      "end": 931
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m21",
            "optional": false,
            "typeAnnotation": null,
            "start": 944,
            "end": 947
          },
          "start": 939,
          "end": 947
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another",
        "raw": "\"./subfolder2/another\"",
        "start": 953,
        "end": 975
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 932,
      "end": 976
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m22",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 992
          },
          "start": 984,
          "end": 992
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/",
        "raw": "\"./subfolder2/another/\"",
        "start": 998,
        "end": 1021
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 977,
      "end": 1022
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1038
          },
          "start": 1030,
          "end": 1038
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder2/another/index",
        "raw": "\"./subfolder2/another/index\"",
        "start": 1044,
        "end": 1072
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1023,
      "end": 1073
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1079,
          "end": 1081
        },
        "prefix": true,
        "start": 1074,
        "end": 1081
      },
      "directive": null,
      "start": 1074,
      "end": 1082
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1088,
          "end": 1090
        },
        "prefix": true,
        "start": 1083,
        "end": 1090
      },
      "directive": null,
      "start": 1083,
      "end": 1091
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1097,
          "end": 1099
        },
        "prefix": true,
        "start": 1092,
        "end": 1099
      },
      "directive": null,
      "start": 1092,
      "end": 1100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1106,
          "end": 1108
        },
        "prefix": true,
        "start": 1101,
        "end": 1108
      },
      "directive": null,
      "start": 1101,
      "end": 1109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1117
        },
        "prefix": true,
        "start": 1110,
        "end": 1117
      },
      "directive": null,
      "start": 1110,
      "end": 1118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1126
        },
        "prefix": true,
        "start": 1119,
        "end": 1126
      },
      "directive": null,
      "start": 1119,
      "end": 1127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1135
        },
        "prefix": true,
        "start": 1128,
        "end": 1135
      },
      "directive": null,
      "start": 1128,
      "end": 1136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1142,
          "end": 1144
        },
        "prefix": true,
        "start": 1137,
        "end": 1144
      },
      "directive": null,
      "start": 1137,
      "end": 1145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1151,
          "end": 1153
        },
        "prefix": true,
        "start": 1146,
        "end": 1153
      },
      "directive": null,
      "start": 1146,
      "end": 1154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1160,
          "end": 1163
        },
        "prefix": true,
        "start": 1155,
        "end": 1163
      },
      "directive": null,
      "start": 1155,
      "end": 1164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1170,
          "end": 1173
        },
        "prefix": true,
        "start": 1165,
        "end": 1173
      },
      "directive": null,
      "start": 1165,
      "end": 1174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1180,
          "end": 1183
        },
        "prefix": true,
        "start": 1175,
        "end": 1183
      },
      "directive": null,
      "start": 1175,
      "end": 1184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1190,
          "end": 1193
        },
        "prefix": true,
        "start": 1185,
        "end": 1193
      },
      "directive": null,
      "start": 1185,
      "end": 1194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m14",
          "optional": false,
          "typeAnnotation": null,
          "start": 1200,
          "end": 1203
        },
        "prefix": true,
        "start": 1195,
        "end": 1203
      },
      "directive": null,
      "start": 1195,
      "end": 1204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1210,
          "end": 1213
        },
        "prefix": true,
        "start": 1205,
        "end": 1213
      },
      "directive": null,
      "start": 1205,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1220,
          "end": 1223
        },
        "prefix": true,
        "start": 1215,
        "end": 1223
      },
      "directive": null,
      "start": 1215,
      "end": 1224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1230,
          "end": 1233
        },
        "prefix": true,
        "start": 1225,
        "end": 1233
      },
      "directive": null,
      "start": 1225,
      "end": 1234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1240,
          "end": 1243
        },
        "prefix": true,
        "start": 1235,
        "end": 1243
      },
      "directive": null,
      "start": 1235,
      "end": 1244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m19",
          "optional": false,
          "typeAnnotation": null,
          "start": 1250,
          "end": 1253
        },
        "prefix": true,
        "start": 1245,
        "end": 1253
      },
      "directive": null,
      "start": 1245,
      "end": 1254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m20",
          "optional": false,
          "typeAnnotation": null,
          "start": 1260,
          "end": 1263
        },
        "prefix": true,
        "start": 1255,
        "end": 1263
      },
      "directive": null,
      "start": 1255,
      "end": 1264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m21",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1273
        },
        "prefix": true,
        "start": 1265,
        "end": 1273
      },
      "directive": null,
      "start": 1265,
      "end": 1274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m22",
          "optional": false,
          "typeAnnotation": null,
          "start": 1280,
          "end": 1283
        },
        "prefix": true,
        "start": 1275,
        "end": 1283
      },
      "directive": null,
      "start": 1275,
      "end": 1284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1290,
          "end": 1293
        },
        "prefix": true,
        "start": 1285,
        "end": 1293
      },
      "directive": null,
      "start": 1285,
      "end": 1294
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1484
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./",
          "raw": "\"./\"",
          "start": 1495,
          "end": 1499
        },
        "start": 1487,
        "end": 1500
      },
      "importKind": "value",
      "start": 1474,
      "end": 1501
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m25",
        "optional": false,
        "typeAnnotation": null,
        "start": 1509,
        "end": 1512
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index",
          "raw": "\"./index\"",
          "start": 1523,
          "end": 1532
        },
        "start": 1515,
        "end": 1533
      },
      "importKind": "value",
      "start": 1502,
      "end": 1534
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m26",
        "optional": false,
        "typeAnnotation": null,
        "start": 1542,
        "end": 1545
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder",
          "raw": "\"./subfolder\"",
          "start": 1556,
          "end": 1569
        },
        "start": 1548,
        "end": 1570
      },
      "importKind": "value",
      "start": 1535,
      "end": 1571
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m27",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1582
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/",
          "raw": "\"./subfolder/\"",
          "start": 1593,
          "end": 1607
        },
        "start": 1585,
        "end": 1608
      },
      "importKind": "value",
      "start": 1572,
      "end": 1609
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m28",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1620
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/index",
          "raw": "\"./subfolder/index\"",
          "start": 1631,
          "end": 1650
        },
        "start": 1623,
        "end": 1651
      },
      "importKind": "value",
      "start": 1610,
      "end": 1652
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m29",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2",
          "raw": "\"./subfolder2\"",
          "start": 1674,
          "end": 1688
        },
        "start": 1666,
        "end": 1689
      },
      "importKind": "value",
      "start": 1653,
      "end": 1690
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1698,
        "end": 1701
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/",
          "raw": "\"./subfolder2/\"",
          "start": 1712,
          "end": 1727
        },
        "start": 1704,
        "end": 1728
      },
      "importKind": "value",
      "start": 1691,
      "end": 1729
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1740
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/index",
          "raw": "\"./subfolder2/index\"",
          "start": 1751,
          "end": 1771
        },
        "start": 1743,
        "end": 1772
      },
      "importKind": "value",
      "start": 1730,
      "end": 1773
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m32",
        "optional": false,
        "typeAnnotation": null,
        "start": 1781,
        "end": 1784
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another",
          "raw": "\"./subfolder2/another\"",
          "start": 1795,
          "end": 1817
        },
        "start": 1787,
        "end": 1818
      },
      "importKind": "value",
      "start": 1774,
      "end": 1819
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1830
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/",
          "raw": "\"./subfolder2/another/\"",
          "start": 1841,
          "end": 1864
        },
        "start": 1833,
        "end": 1865
      },
      "importKind": "value",
      "start": 1820,
      "end": 1866
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m34",
        "optional": false,
        "typeAnnotation": null,
        "start": 1874,
        "end": 1877
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder2/another/index",
          "raw": "\"./subfolder2/another/index\"",
          "start": 1888,
          "end": 1916
        },
        "start": 1880,
        "end": 1917
      },
      "importKind": "value",
      "start": 1867,
      "end": 1918
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m24",
          "optional": false,
          "typeAnnotation": null,
          "start": 1924,
          "end": 1927
        },
        "prefix": true,
        "start": 1919,
        "end": 1927
      },
      "directive": null,
      "start": 1919,
      "end": 1928
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m25",
          "optional": false,
          "typeAnnotation": null,
          "start": 1934,
          "end": 1937
        },
        "prefix": true,
        "start": 1929,
        "end": 1937
      },
      "directive": null,
      "start": 1929,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m26",
          "optional": false,
          "typeAnnotation": null,
          "start": 1944,
          "end": 1947
        },
        "prefix": true,
        "start": 1939,
        "end": 1947
      },
      "directive": null,
      "start": 1939,
      "end": 1948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m27",
          "optional": false,
          "typeAnnotation": null,
          "start": 1954,
          "end": 1957
        },
        "prefix": true,
        "start": 1949,
        "end": 1957
      },
      "directive": null,
      "start": 1949,
      "end": 1958
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m28",
          "optional": false,
          "typeAnnotation": null,
          "start": 1964,
          "end": 1967
        },
        "prefix": true,
        "start": 1959,
        "end": 1967
      },
      "directive": null,
      "start": 1959,
      "end": 1968
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m29",
          "optional": false,
          "typeAnnotation": null,
          "start": 1974,
          "end": 1977
        },
        "prefix": true,
        "start": 1969,
        "end": 1977
      },
      "directive": null,
      "start": 1969,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m30",
          "optional": false,
          "typeAnnotation": null,
          "start": 1984,
          "end": 1987
        },
        "prefix": true,
        "start": 1979,
        "end": 1987
      },
      "directive": null,
      "start": 1979,
      "end": 1988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m31",
          "optional": false,
          "typeAnnotation": null,
          "start": 1994,
          "end": 1997
        },
        "prefix": true,
        "start": 1989,
        "end": 1997
      },
      "directive": null,
      "start": 1989,
      "end": 1998
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m32",
          "optional": false,
          "typeAnnotation": null,
          "start": 2004,
          "end": 2007
        },
        "prefix": true,
        "start": 1999,
        "end": 2007
      },
      "directive": null,
      "start": 1999,
      "end": 2008
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m33",
          "optional": false,
          "typeAnnotation": null,
          "start": 2014,
          "end": 2017
        },
        "prefix": true,
        "start": 2009,
        "end": 2017
      },
      "directive": null,
      "start": 2009,
      "end": 2018
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "m34",
          "optional": false,
          "typeAnnotation": null,
          "start": 2024,
          "end": 2027
        },
        "prefix": true,
        "start": 2019,
        "end": 2027
      },
      "directive": null,
      "start": 2019,
      "end": 2028
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m35",
            "optional": false,
            "typeAnnotation": null,
            "start": 2152,
            "end": 2156
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./",
              "raw": "\"./\"",
              "start": 2166,
              "end": 2170
            },
            "options": null,
            "phase": null,
            "start": 2159,
            "end": 2171
          },
          "definite": false,
          "start": 2152,
          "end": 2171
        }
      ],
      "declare": false,
      "start": 2146,
      "end": 2172
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m36",
            "optional": false,
            "typeAnnotation": null,
            "start": 2179,
            "end": 2183
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./index",
              "raw": "\"./index\"",
              "start": 2193,
              "end": 2202
            },
            "options": null,
            "phase": null,
            "start": 2186,
            "end": 2203
          },
          "definite": false,
          "start": 2179,
          "end": 2203
        }
      ],
      "declare": false,
      "start": 2173,
      "end": 2204
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m37",
            "optional": false,
            "typeAnnotation": null,
            "start": 2211,
            "end": 2215
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder",
              "raw": "\"./subfolder\"",
              "start": 2225,
              "end": 2238
            },
            "options": null,
            "phase": null,
            "start": 2218,
            "end": 2239
          },
          "definite": false,
          "start": 2211,
          "end": 2239
        }
      ],
      "declare": false,
      "start": 2205,
      "end": 2240
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m38",
            "optional": false,
            "typeAnnotation": null,
            "start": 2247,
            "end": 2251
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/",
              "raw": "\"./subfolder/\"",
              "start": 2261,
              "end": 2275
            },
            "options": null,
            "phase": null,
            "start": 2254,
            "end": 2276
          },
          "definite": false,
          "start": 2247,
          "end": 2276
        }
      ],
      "declare": false,
      "start": 2241,
      "end": 2277
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m39",
            "optional": false,
            "typeAnnotation": null,
            "start": 2284,
            "end": 2288
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder/index",
              "raw": "\"./subfolder/index\"",
              "start": 2298,
              "end": 2317
            },
            "options": null,
            "phase": null,
            "start": 2291,
            "end": 2318
          },
          "definite": false,
          "start": 2284,
          "end": 2318
        }
      ],
      "declare": false,
      "start": 2278,
      "end": 2319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m40",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2330
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2",
              "raw": "\"./subfolder2\"",
              "start": 2340,
              "end": 2354
            },
            "options": null,
            "phase": null,
            "start": 2333,
            "end": 2355
          },
          "definite": false,
          "start": 2326,
          "end": 2355
        }
      ],
      "declare": false,
      "start": 2320,
      "end": 2356
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m41",
            "optional": false,
            "typeAnnotation": null,
            "start": 2363,
            "end": 2367
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/",
              "raw": "\"./subfolder2/\"",
              "start": 2377,
              "end": 2392
            },
            "options": null,
            "phase": null,
            "start": 2370,
            "end": 2393
          },
          "definite": false,
          "start": 2363,
          "end": 2393
        }
      ],
      "declare": false,
      "start": 2357,
      "end": 2394
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m42",
            "optional": false,
            "typeAnnotation": null,
            "start": 2401,
            "end": 2405
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/index",
              "raw": "\"./subfolder2/index\"",
              "start": 2415,
              "end": 2435
            },
            "options": null,
            "phase": null,
            "start": 2408,
            "end": 2436
          },
          "definite": false,
          "start": 2401,
          "end": 2436
        }
      ],
      "declare": false,
      "start": 2395,
      "end": 2437
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m43",
            "optional": false,
            "typeAnnotation": null,
            "start": 2444,
            "end": 2448
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another",
              "raw": "\"./subfolder2/another\"",
              "start": 2458,
              "end": 2480
            },
            "options": null,
            "phase": null,
            "start": 2451,
            "end": 2481
          },
          "definite": false,
          "start": 2444,
          "end": 2481
        }
      ],
      "declare": false,
      "start": 2438,
      "end": 2482
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m44",
            "optional": false,
            "typeAnnotation": null,
            "start": 2489,
            "end": 2493
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/",
              "raw": "\"./subfolder2/another/\"",
              "start": 2503,
              "end": 2526
            },
            "options": null,
            "phase": null,
            "start": 2496,
            "end": 2527
          },
          "definite": false,
          "start": 2489,
          "end": 2527
        }
      ],
      "declare": false,
      "start": 2483,
      "end": 2528
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_m45",
            "optional": false,
            "typeAnnotation": null,
            "start": 2535,
            "end": 2539
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./subfolder2/another/index",
              "raw": "\"./subfolder2/another/index\"",
              "start": 2549,
              "end": 2577
            },
            "options": null,
            "phase": null,
            "start": 2542,
            "end": 2578
          },
          "definite": false,
          "start": 2535,
          "end": 2578
        }
      ],
      "declare": false,
      "start": 2529,
      "end": 2579
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2606,
            "end": 2607
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2610,
            "end": 2611
          },
          "definite": false,
          "start": 2606,
          "end": 2611
        }
      ],
      "declare": false,
      "start": 2600,
      "end": 2612
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2622
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2622
          },
          "exportKind": "value",
          "start": 2621,
          "end": 2622
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2613,
      "end": 2624
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 20,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"./index.mjs\"",
    "start": 54,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 81,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 84,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"./index.cjs\"",
    "start": 89,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 119,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 124,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 163,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.mjs\"",
    "start": 168,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 202,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.cjs\"",
    "start": 213,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 253,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.js\"",
    "start": 258,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 298,
    "end": 302
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.mjs\"",
    "start": 303,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 341,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 344,
    "end": 348
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index.cjs\"",
    "start": 349,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 391,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.js\"",
    "start": 396,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 438,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 445,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.mjs\"",
    "start": 450,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 500,
    "end": 504
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index.cjs\"",
    "start": 505,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 656,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 676,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 679,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 683,
    "end": 687
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 688,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 715,
    "end": 719
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 720,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 747,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 751,
    "end": 755
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 756,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 772,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 788,
    "end": 792
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 793,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 823,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 830,
    "end": 834
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 835,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 860,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 863,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 867,
    "end": 871
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 872,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 898,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 905,
    "end": 909
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 910,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 932,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 941,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 944,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 948,
    "end": 952
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 953,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 986,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 993,
    "end": 997
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 998,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1044,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1092,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1101,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1106,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1110,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1137,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "m10",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "m11",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "m12",
    "start": 1180,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "m13",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "m14",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "m15",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "m16",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "m17",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1235,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "m18",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "m19",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "m20",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "m21",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "m22",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "m23",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1474,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1487,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 1495,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1515,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 1523,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1548,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 1556,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1572,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1585,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 1593,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 1617,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1623,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 1631,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1653,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 1660,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1666,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 1674,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1691,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 1698,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1704,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 1712,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1730,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 1737,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1743,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 1751,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 1795,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1820,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 1841,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 1874,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 1888,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1919,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "m24",
    "start": 1924,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "m25",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "m26",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1949,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "m27",
    "start": 1954,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1959,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "m28",
    "start": 1964,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1969,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "m29",
    "start": 1974,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1979,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "m30",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1989,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "m31",
    "start": 1994,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1999,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "m32",
    "start": 2004,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2009,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "m33",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2019,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "m34",
    "start": 2024,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2146,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "_m35",
    "start": 2152,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2159,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 2166,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2173,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "_m36",
    "start": 2179,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2186,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "String",
    "value": "\"./index\"",
    "start": 2193,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "_m37",
    "start": 2211,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2218,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "String",
    "value": "\"./subfolder\"",
    "start": 2225,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "_m38",
    "start": 2247,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2254,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "String",
    "value": "\"./subfolder/\"",
    "start": 2261,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2278,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "_m39",
    "start": 2284,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2291,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "String",
    "value": "\"./subfolder/index\"",
    "start": 2298,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2320,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "_m40",
    "start": 2326,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2333,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "String",
    "value": "\"./subfolder2\"",
    "start": 2340,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2357,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "_m41",
    "start": 2363,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "String",
    "value": "\"./subfolder2/\"",
    "start": 2377,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2395,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "_m42",
    "start": 2401,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2408,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "String",
    "value": "\"./subfolder2/index\"",
    "start": 2415,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2438,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "_m43",
    "start": 2444,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2451,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another\"",
    "start": 2458,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2483,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "_m44",
    "start": 2489,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2496,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/\"",
    "start": 2503,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2529,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "_m45",
    "start": 2535,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2542,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "String",
    "value": "\"./subfolder2/another/index\"",
    "start": 2549,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2600,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2613,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2623,
    "end": 2624
  }
]
```
