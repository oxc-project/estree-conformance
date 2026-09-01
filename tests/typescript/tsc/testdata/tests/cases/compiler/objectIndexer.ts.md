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
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    },
                    "start": 38,
                    "end": 43
                  },
                  "start": 33,
                  "end": 43
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                },
                "start": 44,
                "end": 50
              },
              "start": 32,
              "end": 51
            }
          ],
          "start": 26,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 80,
                    "end": 86
                  },
                  "start": 78,
                  "end": 86
                },
                "start": 77,
                "end": 86
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 97
                },
                "typeArguments": null,
                "start": 89,
                "end": 97
              },
              "start": 87,
              "end": 97
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 76,
            "end": 98
          }
        ],
        "start": 70,
        "end": 100
      },
      "declare": false,
      "start": 55,
      "end": 100
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Emitter",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 115
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
              "name": "listeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 145
                },
                "typeArguments": null,
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 122,
            "end": 146
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 162
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 176,
                          "end": 180
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listeners",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 190
                        },
                        "optional": false,
                        "computed": false,
                        "start": 176,
                        "end": 190
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 193,
                        "end": 195
                      },
                      "start": 176,
                      "end": 195
                    },
                    "directive": null,
                    "start": 176,
                    "end": 196
                  }
                ],
                "start": 166,
                "end": 202
              },
              "expression": false,
              "start": 163,
              "end": 202
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 202
          }
        ],
        "start": 116,
        "end": 204
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 204
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
    "value": "Callback",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "IMap",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Emitter",
    "start": 108,
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
    "value": "private",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "listeners",
    "start": 130,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "IMap",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 151,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "listeners",
    "start": 181,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  }
]
```
