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
          "name": "BarProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 47
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                },
                "start": 62,
                "end": 70
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 71
            }
          ],
          "start": 48,
          "end": 73
        },
        "declare": false,
        "start": 29,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 100
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 115
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BarProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 126
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ],
                  "start": 118,
                  "end": 135
                },
                "start": 116,
                "end": 135
              },
              "accessibility": null,
              "static": false,
              "start": 107,
              "end": 136
            }
          ],
          "start": 101,
          "end": 138
        },
        "declare": false,
        "start": 82,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 75,
      "end": 138
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 167
                },
                "typeArguments": null,
                "start": 159,
                "end": 167
              },
              "start": 157,
              "end": 167
            },
            "start": 154,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 167
        }
      ],
      "declare": true,
      "start": 140,
      "end": 168
    },
    {
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
                  "name": "fooProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 185
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 188,
                    "end": 190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 190
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 177,
                "end": 190
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 192
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 198
          },
          "definite": false,
          "start": 175,
          "end": 198
        }
      ],
      "declare": false,
      "start": 169,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 209
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "barProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 217
        },
        "optional": false,
        "computed": false,
        "start": 201,
        "end": 217
      },
      "directive": null,
      "start": 201,
      "end": 218
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 218
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "BarProps",
    "start": 39,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "barProp",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 61,
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
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 82,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "fooProps",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "BarProps",
    "start": 118,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 159,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "fooProps",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "fooProps",
    "start": 201,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "barProp",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  }
]
```
