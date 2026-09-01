__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 24
        }
      ],
      "declare": false,
      "start": 17,
      "end": 25
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 26
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 10
            },
            "start": 6,
            "end": 10
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 27,
          "end": 30
        },
        "abstract": false,
        "declare": false,
        "start": 18,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 11,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 6,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 7,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 10
            },
            "start": 6,
            "end": 10
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 34
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 35,
          "end": 37
        },
        "abstract": false,
        "declare": false,
        "start": 26,
        "end": 37
      },
      "exportKind": "value",
      "start": 11,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 6,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 7,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 18,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "start": 16,
            "end": 20
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 37
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 38,
          "end": 40
        },
        "abstract": false,
        "declare": false,
        "start": 29,
        "end": 40
      },
      "exportKind": "value",
      "start": 9,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 17,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 21,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "start": 13,
            "end": 17
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C4",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 27,
          "end": 29
        },
        "abstract": false,
        "declare": false,
        "start": 13,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 6,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 14,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "start": 21,
            "end": 25
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 34
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 35,
          "end": 37
        },
        "abstract": false,
        "declare": false,
        "start": 21,
        "end": 37
      },
      "exportKind": "value",
      "start": 6,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 6,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 6,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 22,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "start": 9,
            "end": 13
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "start": 21,
            "end": 25
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 34
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 35,
          "end": 37
        },
        "abstract": false,
        "declare": false,
        "start": 21,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 14,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 10,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 22,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "start": 9,
            "end": 13
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "start": 29,
            "end": 33
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 42
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 43,
          "end": 45
        },
        "abstract": false,
        "declare": false,
        "start": 29,
        "end": 45
      },
      "exportKind": "value",
      "start": 14,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 10,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 14,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 30,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  }
]
```
