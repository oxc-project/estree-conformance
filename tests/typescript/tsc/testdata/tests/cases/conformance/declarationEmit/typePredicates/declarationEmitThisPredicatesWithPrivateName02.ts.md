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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
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
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
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
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              },
              "start": 51,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 61
          }
        ],
        "start": 14,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 81
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 91
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
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 95,
                          "end": 99
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 103,
                              "end": 106
                            },
                            "typeArguments": null,
                            "start": 103,
                            "end": 106
                          },
                          "start": 103,
                          "end": 106
                        },
                        "start": 95,
                        "end": 106
                      },
                      "start": 93,
                      "end": 106
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dis",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 124
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 127,
                                    "end": 131
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "start": 135,
                                    "end": 137
                                  },
                                  "start": 127,
                                  "end": 137
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 141,
                                    "end": 144
                                  },
                                  "typeArguments": null,
                                  "start": 141,
                                  "end": 144
                                },
                                "start": 127,
                                "end": 144
                              },
                              "definite": false,
                              "start": 121,
                              "end": 144
                            }
                          ],
                          "declare": false,
                          "start": 117,
                          "end": 145
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 161,
                                    "end": 164
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 165,
                                    "end": 166
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 161,
                                  "end": 166
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 170,
                                  "end": 174
                                },
                                "start": 161,
                                "end": 174
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 178,
                                    "end": 181
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 182,
                                    "end": 183
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 178,
                                  "end": 183
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 187,
                                  "end": 191
                                },
                                "start": 178,
                                "end": 191
                              },
                              "start": 161,
                              "end": 191
                            },
                            "operator": "&&",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dis",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 195,
                                  "end": 198
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 199,
                                  "end": 200
                                },
                                "optional": false,
                                "computed": false,
                                "start": 195,
                                "end": 200
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 204,
                                "end": 208
                              },
                              "start": 195,
                              "end": 208
                            },
                            "start": 161,
                            "end": 208
                          },
                          "start": 154,
                          "end": 209
                        }
                      ],
                      "start": 107,
                      "end": 215
                    },
                    "expression": false,
                    "start": 91,
                    "end": 215
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 90,
                  "end": 215
                }
              ],
              "start": 84,
              "end": 217
            },
            "definite": false,
            "start": 78,
            "end": 217
          }
        ],
        "declare": false,
        "start": 72,
        "end": 217
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
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
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "m",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 95,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 127,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 167,
    "end": 169
  },
  {
    "type": "Null",
    "value": "null",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 178,
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
    "value": "b",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 184,
    "end": 186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 192,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 201,
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
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  }
]
```
