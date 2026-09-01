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
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 34
                  },
                  "init": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 37,
                    "end": 40
                  },
                  "definite": false,
                  "start": 31,
                  "end": 40
                }
              ],
              "declare": false,
              "start": 25,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 41
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 67,
                        "end": 70
                      },
                      "start": 65,
                      "end": 70
                    },
                    "start": 59,
                    "end": 70
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
                          "start": 75,
                          "end": 76
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 78,
                          "end": 79
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 75,
                        "end": 79
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 81,
                          "end": 82
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 93
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 81,
                        "end": 93
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pair",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 99
                        },
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 102,
                              "end": 103
                            },
                            {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 105,
                              "end": 106
                            }
                          ],
                          "start": 101,
                          "end": 107
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 95,
                        "end": 107
                      }
                    ],
                    "start": 73,
                    "end": 109
                  },
                  "definite": false,
                  "start": 59,
                  "end": 109
                }
              ],
              "declare": false,
              "start": 53,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 110
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fallback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 136
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 139,
                    "end": 140
                  },
                  "definite": false,
                  "start": 128,
                  "end": 140
                }
              ],
              "declare": false,
              "start": 122,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 115,
            "end": 141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 166
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "computed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 177
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 162,
                        "end": 177
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 180
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 180
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fallback",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 191
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 191
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 179,
                        "end": 191
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 193
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 202
                  },
                  "definite": false,
                  "start": 160,
                  "end": 202
                }
              ],
              "declare": false,
              "start": 154,
              "end": 203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 203
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 226
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 227
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pair",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 230,
                    "end": 241
                  },
                  "definite": false,
                  "start": 221,
                  "end": 241
                }
              ],
              "declare": false,
              "start": 215,
              "end": 242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 208,
            "end": 242
          }
        ],
        "start": 12,
        "end": 244
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
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
    "value": "N",
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
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "undefined",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 115,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "computed",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 208,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "pair",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
