__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 89,
              "end": 95
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 95
          }
        ],
        "start": 75,
        "end": 96
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 105,
                    "end": 108
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " without id",
                      "cooked": " without id"
                    },
                    "tail": true,
                    "start": 112,
                    "end": 125
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "typeArguments": null,
                    "start": 108,
                    "end": 112
                  }
                ],
                "start": 105,
                "end": 125
              },
              "start": 103,
              "end": 125
            },
            "start": 101,
            "end": 126
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 130,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 143,
                    "end": 146
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " with id",
                      "cooked": " with id"
                    },
                    "tail": true,
                    "start": 150,
                    "end": 160
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 146,
                    "end": 150
                  }
                ],
                "start": 143,
                "end": 160
              },
              "start": 141,
              "end": 160
            },
            "start": 129,
            "end": 161
          }
        ],
        "start": 97,
        "end": 163
      },
      "declare": false,
      "start": 57,
      "end": 163
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
            "name": "f",
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
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 190
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 191,
                            "end": 194
                          },
                          "start": 191,
                          "end": 194
                        }
                      ],
                      "start": 190,
                      "end": 195
                    },
                    "start": 182,
                    "end": 195
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 206
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 207,
                            "end": 210
                          },
                          "start": 207,
                          "end": 210
                        }
                      ],
                      "start": 206,
                      "end": 211
                    },
                    "start": 198,
                    "end": 211
                  }
                ],
                "start": 182,
                "end": 211
              },
              "start": 180,
              "end": 211
            },
            "start": 179,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 211
        }
      ],
      "declare": true,
      "start": 165,
      "end": 212
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 230,
                "end": 233
              }
            ],
            "optional": false,
            "start": 228,
            "end": 234
          },
          "definite": false,
          "start": 219,
          "end": 234
        }
      ],
      "declare": false,
      "start": 213,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 235
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Callable",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 76,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 108,
    "end": 112
  },
  {
    "type": "Template",
    "value": "} without id`",
    "start": 112,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 146,
    "end": 150
  },
  {
    "type": "Template",
    "value": "} with id`",
    "start": 150,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 165,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 173,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Callable",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Callable",
    "start": 198,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  }
]
```
