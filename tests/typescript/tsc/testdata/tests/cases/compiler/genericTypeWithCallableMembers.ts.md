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
        "name": "Constructable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 51
                },
                "typeArguments": null,
                "start": 38,
                "end": 51
              },
              "start": 36,
              "end": 51
            },
            "start": 30,
            "end": 52
          }
        ],
        "start": 24,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
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
        "start": 63,
        "end": 64
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
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructable",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 88
              },
              "typeArguments": null,
              "start": 75,
              "end": 88
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 88
          }
        ],
        "start": 64,
        "end": 89
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 107
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
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
                          "start": 121,
                          "end": 122
                        },
                        "typeArguments": null,
                        "start": 121,
                        "end": 122
                      },
                      "start": 119,
                      "end": 122
                    },
                    "start": 115,
                    "end": 122
                  },
                  "readonly": false,
                  "static": false,
                  "start": 108,
                  "end": 122
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 151
                        },
                        "typeArguments": null,
                        "start": 138,
                        "end": 151
                      },
                      "start": 136,
                      "end": 151
                    },
                    "start": 131,
                    "end": 151
                  },
                  "readonly": false,
                  "static": false,
                  "start": 124,
                  "end": 151
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 153,
                "end": 156
              },
              "expression": false,
              "start": 107,
              "end": 156
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 96,
            "end": 156
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 167
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 185
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 197,
                              "end": 201
                            },
                            "optional": false,
                            "computed": false,
                            "start": 192,
                            "end": 201
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 188,
                          "end": 203
                        },
                        "definite": false,
                        "start": 184,
                        "end": 203
                      }
                    ],
                    "declare": false,
                    "start": 180,
                    "end": 204
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 231
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 238,
                              "end": 242
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 243,
                              "end": 248
                            },
                            "optional": false,
                            "computed": false,
                            "start": 238,
                            "end": 248
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 234,
                          "end": 250
                        },
                        "definite": false,
                        "start": 229,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 225,
                    "end": 251
                  }
                ],
                "start": 170,
                "end": 284
              },
              "expression": false,
              "start": 167,
              "end": 284
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 161,
            "end": 284
          }
        ],
        "start": 90,
        "end": 286
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 286
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
    "value": "Constructable",
    "start": 10,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Constructable",
    "start": 38,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Constructable",
    "start": 75,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 96,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Constructable",
    "start": 138,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 188,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
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
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  }
]
```
