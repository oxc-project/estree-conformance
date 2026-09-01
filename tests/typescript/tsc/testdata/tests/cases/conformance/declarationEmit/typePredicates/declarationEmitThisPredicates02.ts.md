__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                "start": 27,
                "end": 28
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                },
                "start": 28,
                "end": 36
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 37
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
                "start": 42,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                },
                "start": 43,
                "end": 51
              },
              "accessibility": null,
              "static": false,
              "start": 42,
              "end": 52
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
                "start": 57,
                "end": 58
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 60,
                  "end": 67
                },
                "start": 58,
                "end": 67
              },
              "accessibility": null,
              "static": false,
              "start": 57,
              "end": 68
            }
          ],
          "start": 21,
          "end": 70
        },
        "declare": false,
        "start": 7,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 70
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
              "start": 85,
              "end": 88
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
                    "start": 97,
                    "end": 98
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
                          "start": 102,
                          "end": 106
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
                              "start": 110,
                              "end": 113
                            },
                            "typeArguments": null,
                            "start": 110,
                            "end": 113
                          },
                          "start": 110,
                          "end": 113
                        },
                        "start": 102,
                        "end": 113
                      },
                      "start": 100,
                      "end": 113
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
                                "start": 128,
                                "end": 131
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 134,
                                    "end": 138
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "members": [],
                                    "start": 142,
                                    "end": 144
                                  },
                                  "start": 134,
                                  "end": 144
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 148,
                                    "end": 151
                                  },
                                  "typeArguments": null,
                                  "start": 148,
                                  "end": 151
                                },
                                "start": 134,
                                "end": 151
                              },
                              "definite": false,
                              "start": 128,
                              "end": 151
                            }
                          ],
                          "declare": false,
                          "start": 124,
                          "end": 152
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
                                    "start": 168,
                                    "end": 171
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 172,
                                    "end": 173
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 168,
                                  "end": 173
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 177,
                                  "end": 181
                                },
                                "start": 168,
                                "end": 181
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
                                    "start": 185,
                                    "end": 188
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 189,
                                    "end": 190
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 185,
                                  "end": 190
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 194,
                                  "end": 198
                                },
                                "start": 185,
                                "end": 198
                              },
                              "start": 168,
                              "end": 198
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
                                  "start": 202,
                                  "end": 205
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 207
                                },
                                "optional": false,
                                "computed": false,
                                "start": 202,
                                "end": 207
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 211,
                                "end": 215
                              },
                              "start": 202,
                              "end": 215
                            },
                            "start": 168,
                            "end": 215
                          },
                          "start": 161,
                          "end": 216
                        }
                      ],
                      "start": 114,
                      "end": 222
                    },
                    "expression": false,
                    "start": 98,
                    "end": 222
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 97,
                  "end": 222
                }
              ],
              "start": 91,
              "end": 224
            },
            "definite": false,
            "start": 85,
            "end": 224
          }
        ],
        "declare": false,
        "start": 79,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 72,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 224
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 107,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 145,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 161,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 174,
    "end": 176
  },
  {
    "type": "Null",
    "value": "null",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 191,
    "end": 193
  },
  {
    "type": "Null",
    "value": "null",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "dis",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 208,
    "end": 210
  },
  {
    "type": "Null",
    "value": "null",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  }
]
```
