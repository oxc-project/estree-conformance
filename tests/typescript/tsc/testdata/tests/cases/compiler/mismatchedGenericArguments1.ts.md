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
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 27,
                    "end": 28
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 27,
                  "end": 28
                }
              ],
              "start": 26,
              "end": 29
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 33,
                      "end": 34
                    },
                    "typeArguments": null,
                    "start": 33,
                    "end": 34
                  },
                  "start": 31,
                  "end": 34
                },
                "start": 30,
                "end": 34
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 39
          }
        ],
        "start": 18,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
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
              "start": 50,
              "end": 51
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 50,
            "end": 51
          }
        ],
        "start": 49,
        "end": 52
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "typeArguments": null,
                "start": 69,
                "end": 70
              }
            ],
            "start": 68,
            "end": 71
          },
          "start": 64,
          "end": 71
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    },
                    "start": 82,
                    "end": 90
                  },
                  "start": 81,
                  "end": 90
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 93,
                  "end": 99
                },
                "start": 91,
                "end": 99
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 114,
                      "end": 118
                    },
                    "start": 107,
                    "end": 119
                  }
                ],
                "start": 100,
                "end": 124
              },
              "expression": false,
              "start": 80,
              "end": 124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 77,
            "end": 124
          }
        ],
        "start": 72,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 138
          }
        ],
        "start": 136,
        "end": 139
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 155
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 157
                },
                "typeArguments": null,
                "start": 156,
                "end": 157
              }
            ],
            "start": 155,
            "end": 158
          },
          "start": 151,
          "end": 158
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 167
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 169
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 168,
                    "end": 169
                  }
                ],
                "start": 167,
                "end": 170
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 174,
                      "end": 180
                    },
                    "start": 172,
                    "end": 180
                  },
                  "start": 171,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                },
                "start": 181,
                "end": 189
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 204,
                      "end": 208
                    },
                    "start": 197,
                    "end": 209
                  }
                ],
                "start": 190,
                "end": 214
              },
              "expression": false,
              "start": 167,
              "end": 214
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 164,
            "end": 214
          }
        ],
        "start": 159,
        "end": 216
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 53,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
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
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 107,
    "end": 113
  },
  {
    "type": "Null",
    "value": "null",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 140,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Null",
    "value": "null",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  }
]
```
