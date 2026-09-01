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
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 33
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "declare": false,
              "start": 24,
              "end": 43
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 17,
            "end": 43
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 64
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 65,
                "end": 67
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 67
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 67
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
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 88
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 91,
                    "end": 93
                  },
                  "definite": false,
                  "start": 83,
                  "end": 93
                }
              ],
              "declare": false,
              "start": 77,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 70,
            "end": 94
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 120
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
                        "name": "NestedClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 151
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 160,
                              "end": 161
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 164,
                                "end": 170
                              },
                              "start": 162,
                              "end": 170
                            },
                            "value": null,
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": true,
                            "readonly": false,
                            "accessibility": null,
                            "start": 160,
                            "end": 171
                          }
                        ],
                        "start": 152,
                        "end": 177
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 134,
                      "end": 177
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 127,
                    "end": 177
                  }
                ],
                "start": 121,
                "end": 181
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 104,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 97,
            "end": 181
          }
        ],
        "start": 13,
        "end": 183
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 183
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 202
      },
      "exportKind": "value",
      "start": 185,
      "end": 203
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 204
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
    "value": "ns",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 70,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 104,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "NestedClass",
    "start": 140,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 185,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 192,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 12,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ns",
        "raw": "'./ns'",
        "start": 20,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 30
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 36
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 36
      },
      "directive": null,
      "start": 28,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 49
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 55
        },
        "optional": false,
        "computed": false,
        "start": 47,
        "end": 55
      },
      "directive": null,
      "start": 47,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 75
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 81
                  },
                  "start": 73,
                  "end": 81
                },
                "typeArguments": null,
                "start": 73,
                "end": 81
              },
              "start": 71,
              "end": 81
            },
            "start": 70,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 81
        }
      ],
      "declare": false,
      "start": 66,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 92
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 97
                  },
                  "start": 90,
                  "end": 97
                },
                "typeArguments": null,
                "start": 90,
                "end": 97
              },
              "start": 88,
              "end": 97
            },
            "start": 87,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 100,
            "end": 102
          },
          "definite": false,
          "start": 87,
          "end": 102
        }
      ],
      "declare": false,
      "start": 83,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 113
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 120
                    },
                    "start": 111,
                    "end": 120
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NestedClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 132
                  },
                  "start": 111,
                  "end": 132
                },
                "typeArguments": null,
                "start": 111,
                "end": 132
              },
              "start": 109,
              "end": 132
            },
            "start": 108,
            "end": 132
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
                  "start": 137,
                  "end": 138
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 140,
                  "end": 142
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 137,
                "end": 142
              }
            ],
            "start": 135,
            "end": 144
          },
          "definite": false,
          "start": 108,
          "end": 144
        }
      ],
      "declare": false,
      "start": 104,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 145
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "'./ns'",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 31,
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
    "value": "ns",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 108,
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
    "value": "ns",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "NestedClass",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "''",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  }
]
```
