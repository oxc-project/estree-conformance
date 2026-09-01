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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
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
                  "start": 20,
                  "end": 21
                },
                "typeArguments": null,
                "start": 20,
                "end": 21
              },
              "start": 18,
              "end": 21
            },
            "accessibility": null,
            "static": false,
            "start": 17,
            "end": 22
          }
        ],
        "start": 15,
        "end": 24
      },
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 36
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
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
                        "start": 51,
                        "end": 52
                      },
                      "typeArguments": null,
                      "start": 51,
                      "end": 52
                    }
                  ],
                  "start": 50,
                  "end": 53
                },
                "start": 49,
                "end": 53
              },
              "start": 47,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
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
                  "start": 64,
                  "end": 65
                },
                "typeArguments": null,
                "start": 64,
                "end": 65
              },
              "start": 62,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 66
          }
        ],
        "start": 40,
        "end": 68
      },
      "declare": false,
      "start": 25,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
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
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          }
        ],
        "start": 80,
        "end": 83
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 96
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
                              "start": 97,
                              "end": 98
                            },
                            "typeArguments": null,
                            "start": 97,
                            "end": 98
                          }
                        ],
                        "start": 96,
                        "end": 99
                      },
                      "start": 95,
                      "end": 99
                    }
                  ],
                  "start": 94,
                  "end": 100
                },
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 101
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
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
                  "start": 111,
                  "end": 112
                },
                "typeArguments": null,
                "start": 111,
                "end": 112
              },
              "start": 109,
              "end": 112
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 113
          }
        ],
        "start": 84,
        "end": 115
      },
      "declare": false,
      "start": 69,
      "end": 115
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    }
                  ],
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              },
              "start": 129,
              "end": 140
            },
            "start": 128,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 140
        }
      ],
      "declare": true,
      "start": 116,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 147
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 150,
          "end": 151
        },
        "start": 142,
        "end": 151
      },
      "directive": null,
      "start": 142,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "optional": false,
            "computed": false,
            "start": 178,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 185
          },
          "optional": false,
          "computed": false,
          "start": 178,
          "end": 185
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 188,
          "end": 189
        },
        "start": 178,
        "end": 189
      },
      "directive": null,
      "start": 178,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "optional": false,
              "computed": false,
              "start": 214,
              "end": 217
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "optional": false,
            "computed": false,
            "start": 214,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 223
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 223
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 226,
          "end": 227
        },
        "start": 214,
        "end": 227
      },
      "directive": null,
      "start": 214,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 280
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "optional": false,
                "computed": false,
                "start": 279,
                "end": 282
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "optional": false,
              "computed": false,
              "start": 279,
              "end": 284
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "optional": false,
            "computed": false,
            "start": 279,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 290
          },
          "optional": false,
          "computed": false,
          "start": 279,
          "end": 290
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 293,
          "end": 294
        },
        "start": 279,
        "end": 294
      },
      "directive": null,
      "start": 279,
      "end": 295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 343
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
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "A",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 116,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  }
]
```
