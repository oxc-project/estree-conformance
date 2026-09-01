__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "add",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "start": 28,
            "end": 37
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 39,
            "end": 48
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "start": 63,
                "end": 68
              },
              "start": 56,
              "end": 69
            }
          ],
          "start": 50,
          "end": 71
        },
        "expression": false,
        "start": 15,
        "end": 71
      },
      "exportKind": "value",
      "start": 0,
      "end": 71
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 72
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
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
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./example",
        "raw": "'./example'",
        "start": 25,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 60,
        "end": 63
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "start": 72,
              "end": 73
            },
            "start": 70,
            "end": 73
          },
          "start": 64,
          "end": 73
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "method",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "start": 83,
              "end": 90
            },
            "start": 81,
            "end": 90
          },
          "start": 75,
          "end": 90
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 93,
          "end": 97
        },
        "start": 91,
        "end": 97
      },
      "body": null,
      "expression": false,
      "start": 39,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 112
          },
          {
            "type": "Literal",
            "value": "default",
            "raw": "\"default\"",
            "start": 114,
            "end": 123
          }
        ],
        "optional": false,
        "start": 100,
        "end": 124
      },
      "directive": null,
      "start": 100,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
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
    "value": "example",
    "start": 12,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "'./example'",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  }
]
```
