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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 40,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 52
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "correctVersionApplied",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 74
        },
        "optional": false,
        "computed": false,
        "start": 49,
        "end": 74
      },
      "directive": null,
      "start": 49,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 76
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "correctVersionApplied",
    "start": 53,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 40,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 52
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "correctVersionApplied",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 74
        },
        "optional": false,
        "computed": false,
        "start": 49,
        "end": 74
      },
      "directive": null,
      "start": 49,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 76
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "correctVersionApplied",
    "start": 53,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 40,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 52
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "correctVersionApplied",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 74
        },
        "optional": false,
        "computed": false,
        "start": 49,
        "end": 74
      },
      "directive": null,
      "start": 49,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 76
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "correctVersionApplied",
    "start": 53,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "noConditionsApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 51
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 54,
              "end": 58
            },
            "definite": false,
            "start": 32,
            "end": 58
          }
        ],
        "declare": false,
        "start": 26,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 59
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "noConditionsApplied",
    "start": 32,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "importConditionApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 54
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 57,
              "end": 61
            },
            "definite": false,
            "start": 32,
            "end": 61
          }
        ],
        "declare": false,
        "start": 26,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 62
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "importConditionApplied",
    "start": 32,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrongConditionApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 53
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 56,
              "end": 60
            },
            "definite": false,
            "start": 32,
            "end": 60
          }
        ],
        "declare": false,
        "start": 26,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "wrongConditionApplied",
    "start": 32,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "noVersionApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 29
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 32,
              "end": 36
            },
            "definite": false,
            "start": 13,
            "end": 36
          }
        ],
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "noVersionApplied",
    "start": 13,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "correctVersionApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 37,
              "end": 41
            },
            "definite": false,
            "start": 13,
            "end": 41
          }
        ],
        "declare": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "correctVersionApplied",
    "start": 13,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "futureVersionApplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 33
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 36,
              "end": 40
            },
            "definite": false,
            "start": 13,
            "end": 40
          }
        ],
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "futureVersionApplied",
    "start": 13,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
