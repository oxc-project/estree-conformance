__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 26
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 38
              },
              "initializer": {
                "type": "Literal",
                "value": "123123",
                "raw": "'123123'",
                "start": 41,
                "end": 49
              },
              "computed": false,
              "start": 33,
              "end": 49
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test2",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "initializer": {
                "type": "Literal",
                "value": "12312312312",
                "raw": "'12312312312'",
                "start": 63,
                "end": 76
              },
              "computed": false,
              "start": 55,
              "end": 76
            }
          ],
          "start": 27,
          "end": 79
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ITest",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 103
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 125
                },
                "optional": false,
                "computed": false,
                "start": 111,
                "end": 125
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 128,
                  "end": 134
                },
                "start": 126,
                "end": 134
              },
              "accessibility": null,
              "static": false,
              "start": 110,
              "end": 135
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 155
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 155
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 158,
                  "end": 164
                },
                "start": 156,
                "end": 164
              },
              "accessibility": null,
              "static": false,
              "start": 140,
              "end": 165
            }
          ],
          "start": 104,
          "end": 167
        },
        "declare": false,
        "start": 88,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
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
                "name": "getA",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ITest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 203
                  },
                  "start": 196,
                  "end": 203
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 250
                              },
                              "optional": false,
                              "computed": false,
                              "start": 236,
                              "end": 250
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 253,
                              "end": 258
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 235,
                            "end": 258
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 273,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 273,
                              "end": 287
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 290,
                              "end": 295
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 272,
                            "end": 295
                          }
                        ],
                        "start": 221,
                        "end": 306
                      },
                      "start": 214,
                      "end": 307
                    }
                  ],
                  "start": 204,
                  "end": 313
                },
                "expression": false,
                "start": 194,
                "end": 313
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 190,
              "end": 313
            }
          ],
          "start": 184,
          "end": 315
        },
        "abstract": false,
        "declare": false,
        "start": 176,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 169,
      "end": 315
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 315
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 18,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "'123123'",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "'12312312312'",
    "start": 63,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 111,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "getA",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 273,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./class",
        "raw": "'./class'",
        "start": 18,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
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
                "name": "getA",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 65
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 118,
                                  "end": 123
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 124,
                                  "end": 128
                                },
                                "optional": false,
                                "computed": false,
                                "start": 118,
                                "end": 128
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 118,
                              "end": 130
                            },
                            "start": 115,
                            "end": 130
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 145
                            },
                            "value": {
                              "type": "Literal",
                              "value": "123",
                              "raw": "'123'",
                              "start": 147,
                              "end": 152
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 144,
                            "end": 152
                          }
                        ],
                        "start": 101,
                        "end": 163
                      },
                      "start": 94,
                      "end": 164
                    }
                  ],
                  "start": 68,
                  "end": 170
                },
                "expression": false,
                "start": 65,
                "end": 170
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 61,
              "end": 170
            }
          ],
          "start": 55,
          "end": 172
        },
        "abstract": false,
        "declare": false,
        "start": 37,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "'./class'",
    "start": 18,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 45,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "getA",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 115,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "getA",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  }
]
```
