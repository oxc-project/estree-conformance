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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 53
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 46,
                  "end": 55
                },
                "definite": false,
                "start": 42,
                "end": 55
              }
            ],
            "declare": false,
            "start": 36,
            "end": 56
          },
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
                  "start": 94,
                  "end": 101
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 105
                },
                "optional": false,
                "computed": false,
                "start": 94,
                "end": 105
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 113
                  },
                  "optional": false,
                  "computed": false,
                  "start": 106,
                  "end": 113
                }
              ],
              "optional": false,
              "start": 94,
              "end": 114
            },
            "directive": null,
            "start": 94,
            "end": 115
          }
        ],
        "start": 30,
        "end": 117
      },
      "expression": false,
      "start": 17,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
      },
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
              "start": 129,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 128,
        "end": 131
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 138,
            "end": 151
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Field",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 194,
                "end": 200
              },
              "start": 192,
              "end": 200
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ThisExpression",
                  "start": 204,
                  "end": 208
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 215
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 216,
                        "end": 219
                      }
                    ],
                    "start": 215,
                    "end": 220
                  },
                  "start": 212,
                  "end": 220
                },
                "start": 204,
                "end": 220
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 203,
              "end": 225
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 187,
            "end": 226
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 236
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ThisExpression",
                  "start": 240,
                  "end": 244
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 251
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 252,
                        "end": 255
                      }
                    ],
                    "start": 251,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "start": 240,
                "end": 256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 261
              },
              "optional": false,
              "computed": false,
              "start": 239,
              "end": 261
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 231,
            "end": 262
          }
        ],
        "start": 132,
        "end": 264
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 264
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 264
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 17,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 204,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 209,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 240,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  }
]
```
