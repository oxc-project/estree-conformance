__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 52
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 63,
                              "end": 69
                            },
                            "start": 61,
                            "end": 69
                          },
                          "start": 60,
                          "end": 69
                        },
                        "readonly": false,
                        "static": false,
                        "start": 53,
                        "end": 69
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 81,
                              "end": 87
                            },
                            "start": 79,
                            "end": 87
                          },
                          "start": 78,
                          "end": 87
                        },
                        "readonly": false,
                        "static": false,
                        "start": 71,
                        "end": 87
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 89,
                      "end": 92
                    },
                    "expression": false,
                    "start": 52,
                    "end": 92
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 41,
                  "end": 92
                }
              ],
              "start": 31,
              "end": 98
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 98
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 128
                      },
                      "start": 121,
                      "end": 128
                    },
                    "start": 115,
                    "end": 128
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 134
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 136,
                          "end": 137
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 133,
                        "end": 137
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 142,
                          "end": 143
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 139,
                        "end": 143
                      }
                    ],
                    "start": 131,
                    "end": 145
                  },
                  "definite": false,
                  "start": 115,
                  "end": 145
                }
              ],
              "declare": false,
              "start": 111,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 104,
            "end": 146
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 168
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
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 178
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 189
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 190,
                              "end": 191
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 193,
                              "end": 194
                            }
                          ],
                          "start": 180,
                          "end": 195
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 173,
                        "end": 195
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 200
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 211
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 212,
                              "end": 213
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 215,
                              "end": 216
                            }
                          ],
                          "start": 202,
                          "end": 217
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 197,
                        "end": 217
                      }
                    ],
                    "start": 171,
                    "end": 219
                  },
                  "definite": false,
                  "start": 163,
                  "end": 219
                }
              ],
              "declare": false,
              "start": 159,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 152,
            "end": 220
          }
        ],
        "start": 12,
        "end": 222
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 41,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 53,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 136,
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
    "value": "y",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 152,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Unity",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  }
]
```
