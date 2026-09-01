__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 40
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 41,
              "end": 42
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 42
          }
        ],
        "start": 40,
        "end": 43
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeArguments": null,
                  "start": 51,
                  "end": 52
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                },
                {
                  "type": "TSNullKeyword",
                  "start": 67,
                  "end": 71
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 74,
                  "end": 78
                }
              ],
              "start": 51,
              "end": 78
            },
            "start": 49,
            "end": 78
          },
          "start": 44,
          "end": 78
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 86
          },
          "asserts": false,
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
                "start": 90,
                "end": 91
              },
              "typeArguments": null,
              "start": 90,
              "end": 91
            },
            "start": 90,
            "end": 91
          },
          "start": 81,
          "end": 91
        },
        "start": 79,
        "end": 91
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 122
                },
                "start": 103,
                "end": 122
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 131
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 136,
                  "end": 140
                },
                "start": 126,
                "end": 140
              },
              "start": 103,
              "end": 140
            },
            "start": 96,
            "end": 141
          }
        ],
        "start": 92,
        "end": 143
      },
      "expression": false,
      "start": 22,
      "end": 143
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 173,
                    "end": 182
                  }
                ],
                "start": 164,
                "end": 182
              },
              "start": 162,
              "end": 182
            },
            "start": 159,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 182
        }
      ],
      "declare": true,
      "start": 145,
      "end": 183
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 202
          }
        ],
        "optional": false,
        "start": 189,
        "end": 203
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 216
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 220
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 220
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 224
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 236
                    },
                    "optional": false,
                    "computed": false,
                    "start": 221,
                    "end": 236
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 221,
                  "end": 238
                }
              ],
              "optional": false,
              "start": 209,
              "end": 239
            },
            "directive": null,
            "start": 209,
            "end": 240
          }
        ],
        "start": 205,
        "end": 243
      },
      "alternate": null,
      "start": 185,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Null",
    "value": "null",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 96,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 132,
    "end": 135
  },
  {
    "type": "Null",
    "value": "null",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 173,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 225,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  }
]
```
