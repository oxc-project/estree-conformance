__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 15
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 20
                      },
                      "typeArguments": null,
                      "start": 19,
                      "end": 20
                    },
                    "start": 17,
                    "end": 20
                  },
                  "start": 16,
                  "end": 20
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "start": 24,
                    "end": 33
                  }
                ],
                "start": 22,
                "end": 35
              },
              "expression": false,
              "start": 15,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 35
          }
        ],
        "start": 10,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "typeParameters": null,
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 76
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
                        "body": [],
                        "start": 79,
                        "end": 82
                      },
                      "expression": false,
                      "start": 76,
                      "end": 82
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 73,
                    "end": 82
                  }
                ],
                "start": 71,
                "end": 84
              },
              "abstract": false,
              "declare": false,
              "start": 63,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 56,
            "end": 84
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 133,
                        "end": 144
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 125,
                      "end": 144
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 118,
                    "end": 144
                  }
                ],
                "start": 108,
                "end": 150
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 96,
              "end": 150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 150
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 163
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 171
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 173
                        },
                        "typeArguments": null,
                        "start": 172,
                        "end": 173
                      }
                    ],
                    "start": 171,
                    "end": 174
                  },
                  "arguments": [],
                  "start": 166,
                  "end": 176
                },
                "definite": false,
                "start": 161,
                "end": 176
              }
            ],
            "declare": false,
            "start": 157,
            "end": 177
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 184
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 188
                    },
                    "optional": false,
                    "computed": false,
                    "start": 182,
                    "end": 188
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 189,
                      "end": 193
                    }
                  ],
                  "optional": false,
                  "start": 182,
                  "end": 194
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 198
                },
                "optional": false,
                "computed": false,
                "start": 182,
                "end": 198
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 182,
              "end": 200
            },
            "directive": null,
            "start": 182,
            "end": 201
          }
        ],
        "start": 50,
        "end": 203
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 38,
      "end": 203
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 210
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 222
                    },
                    "start": 219,
                    "end": 222
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 222
                }
              ],
              "start": 218,
              "end": 223
            },
            "arguments": [],
            "start": 213,
            "end": 225
          },
          "definite": false,
          "start": 208,
          "end": 225
        }
      ],
      "declare": false,
      "start": 204,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 24,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Null",
    "value": "null",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  }
]
```
