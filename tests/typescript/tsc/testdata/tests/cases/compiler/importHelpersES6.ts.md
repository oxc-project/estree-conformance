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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
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
              "start": 23,
              "end": 26
            },
            "start": 22,
            "end": 26
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 41
        },
        "typeParameters": null,
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
                "type": "PrivateIdentifier",
                "name": "x",
                "start": 48,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 50,
                "end": 58
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 48,
              "end": 63
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "x",
                            "start": 85,
                            "end": 87
                          },
                          "optional": false,
                          "computed": false,
                          "start": 80,
                          "end": 87
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 96,
                              "end": 100
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "x",
                              "start": 101,
                              "end": 103
                            },
                            "optional": false,
                            "computed": false,
                            "start": 96,
                            "end": 103
                          },
                          "start": 90,
                          "end": 103
                        },
                        "start": 80,
                        "end": 103
                      },
                      "directive": null,
                      "start": 80,
                      "end": 104
                    }
                  ],
                  "start": 78,
                  "end": 106
                },
                "expression": false,
                "start": 75,
                "end": 106
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 68,
              "end": 106
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
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
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "start": 125,
                          "end": 127
                        },
                        "operator": "in",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "start": 125,
                        "end": 132
                      },
                      "start": 118,
                      "end": 133
                    }
                  ],
                  "start": 116,
                  "end": 135
                },
                "expression": false,
                "start": 112,
                "end": 135
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 111,
              "end": 135
            }
          ],
          "start": 42,
          "end": 137
        },
        "abstract": false,
        "declare": false,
        "start": 34,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 137
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 154,
                  "end": 155
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 151,
                "end": 155
              }
            ],
            "start": 149,
            "end": 157
          },
          "definite": false,
          "start": 145,
          "end": 157
        }
      ],
      "declare": false,
      "start": 139,
      "end": 158
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "start": 171,
                "end": 175
              }
            ],
            "start": 169,
            "end": 177
          },
          "definite": false,
          "start": 165,
          "end": 177
        }
      ],
      "declare": false,
      "start": 159,
      "end": 178
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 23,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
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
    "value": "A",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 90,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 118,
    "end": 124
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 125,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 33
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 45
                },
                "typeArguments": null,
                "start": 37,
                "end": 45
              },
              "start": 35,
              "end": 45
            },
            "start": 34,
            "end": 45
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 58
                },
                "typeArguments": null,
                "start": 50,
                "end": 58
              },
              "start": 48,
              "end": 58
            },
            "start": 47,
            "end": 58
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          },
          "start": 59,
          "end": 65
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 101
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 122
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 122
                },
                "start": 114,
                "end": 124
              },
              "start": 112,
              "end": 124
            },
            "start": 102,
            "end": 124
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
              },
              "start": 132,
              "end": 137
            },
            "start": 126,
            "end": 137
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 145,
                    "end": 151
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  }
                ],
                "start": 145,
                "end": 160
              },
              "start": 143,
              "end": 160
            },
            "start": 139,
            "end": 160
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 169,
                "end": 172
              },
              "start": 167,
              "end": 172
            },
            "start": 162,
            "end": 172
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 175,
            "end": 178
          },
          "start": 173,
          "end": 178
        },
        "body": null,
        "expression": false,
        "start": 74,
        "end": 179
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 67,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__param",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 211
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "start": 212,
            "end": 230
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 251
                },
                "typeArguments": null,
                "start": 243,
                "end": 251
              },
              "start": 241,
              "end": 251
            },
            "start": 232,
            "end": 251
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "typeArguments": null,
            "start": 254,
            "end": 262
          },
          "start": 252,
          "end": 262
        },
        "body": null,
        "expression": false,
        "start": 187,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 180,
      "end": 263
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 298
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 312,
                "end": 315
              },
              "start": 310,
              "end": 315
            },
            "start": 299,
            "end": 315
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 332,
                "end": 335
              },
              "start": 330,
              "end": 335
            },
            "start": 317,
            "end": 335
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 346
            },
            "typeArguments": null,
            "start": 338,
            "end": 346
          },
          "start": 336,
          "end": 346
        },
        "body": null,
        "expression": false,
        "start": 271,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 264,
      "end": 347
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 381
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 391,
                "end": 394
              },
              "start": 389,
              "end": 394
            },
            "start": 382,
            "end": 394
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 408,
                "end": 411
              },
              "start": 406,
              "end": 411
            },
            "start": 396,
            "end": 411
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 424
                },
                "typeArguments": null,
                "start": 416,
                "end": 424
              },
              "start": 414,
              "end": 424
            },
            "start": 413,
            "end": 424
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 445
                },
                "typeArguments": null,
                "start": 437,
                "end": 445
              },
              "start": 435,
              "end": 445
            },
            "start": 426,
            "end": 445
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 448,
            "end": 451
          },
          "start": 446,
          "end": 451
        },
        "body": null,
        "expression": false,
        "start": 355,
        "end": 452
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 348,
      "end": 452
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 499
        },
        "generator": false,
        "async": false,
        "declare": true,
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
                "type": "TSAnyKeyword",
                "start": 503,
                "end": 506
              },
              "start": 501,
              "end": 506
            },
            "start": 500,
            "end": 506
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 511,
                "end": 514
              },
              "start": 509,
              "end": 514
            },
            "start": 508,
            "end": 514
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 519,
                "end": 522
              },
              "start": 517,
              "end": 522
            },
            "start": 516,
            "end": 522
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              },
              "start": 525,
              "end": 530
            },
            "start": 524,
            "end": 530
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 533,
            "end": 536
          },
          "start": 531,
          "end": 536
        },
        "body": null,
        "expression": false,
        "start": 460,
        "end": 537
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 453,
      "end": 537
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "typeAnnotation": null,
          "start": 562,
          "end": 584
        },
        "generator": false,
        "async": false,
        "declare": true,
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
                "type": "TSAnyKeyword",
                "start": 588,
                "end": 591
              },
              "start": 586,
              "end": 591
            },
            "start": 585,
            "end": 591
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 596,
                "end": 599
              },
              "start": 594,
              "end": 599
            },
            "start": 593,
            "end": 599
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 604,
                "end": 607
              },
              "start": 602,
              "end": 607
            },
            "start": 601,
            "end": 607
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 612,
                "end": 615
              },
              "start": 610,
              "end": 615
            },
            "start": 609,
            "end": 615
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              },
              "start": 618,
              "end": 623
            },
            "start": 617,
            "end": 623
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 626,
            "end": 629
          },
          "start": 624,
          "end": 629
        },
        "body": null,
        "expression": false,
        "start": 545,
        "end": 630
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 538,
      "end": 630
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldIn",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 676
        },
        "generator": false,
        "async": false,
        "declare": true,
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
                "type": "TSAnyKeyword",
                "start": 680,
                "end": 683
              },
              "start": 678,
              "end": 683
            },
            "start": 677,
            "end": 683
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 688,
                "end": 691
              },
              "start": 686,
              "end": 691
            },
            "start": 685,
            "end": 691
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 694,
            "end": 701
          },
          "start": 692,
          "end": 701
        },
        "body": null,
        "expression": false,
        "start": 638,
        "end": 702
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 631,
      "end": 702
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 702
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
    "type": "Identifier",
    "value": "declare",
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
    "value": "__extends",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "value": "Function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "__decorate",
    "start": 91,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 102,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 126,
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
    "value": "any",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "desc",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 195,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "__param",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "paramIndex",
    "start": 212,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "decorator",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "__metadata",
    "start": 288,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "metadataKey",
    "start": 299,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "metadataValue",
    "start": 317,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 348,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 355,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 363,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "__awaiter",
    "start": 372,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "_arguments",
    "start": 396,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 416,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 426,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 437,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 453,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 460,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "__classPrivateFieldGet",
    "start": 477,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 503,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 538,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 545,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 553,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "__classPrivateFieldSet",
    "start": 562,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 631,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 638,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "__classPrivateFieldIn",
    "start": 655,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 694,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  }
]
```
