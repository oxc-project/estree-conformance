__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "typeArguments": null,
            "start": 11,
            "end": 18
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeArguments": null,
            "start": 21,
            "end": 29
          }
        ],
        "start": 11,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 46,
            "end": 52
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 55,
              "end": 60
            },
            "start": 55,
            "end": 60
          }
        ],
        "start": 46,
        "end": 60
      },
      "declare": false,
      "start": 31,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 85
          },
          "typeArguments": null,
          "start": 78,
          "end": 85
        },
        "start": 78,
        "end": 87
      },
      "declare": false,
      "start": 62,
      "end": 88
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
            "name": "foo1",
            "optional": false,
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
                  "start": 108,
                  "end": 111
                },
                "typeArguments": null,
                "start": 108,
                "end": 111
              },
              "start": 106,
              "end": 111
            },
            "start": 102,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 111
        }
      ],
      "declare": true,
      "start": 90,
      "end": 112
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
            "name": "foo2",
            "optional": false,
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
                  "start": 131,
                  "end": 134
                },
                "typeArguments": null,
                "start": 131,
                "end": 134
              },
              "start": 129,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 134
        }
      ],
      "declare": true,
      "start": 113,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 140
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 147,
                    "end": 160
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 165
                    }
                  ],
                  "optional": false,
                  "start": 147,
                  "end": 166
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 173
                },
                "alternate": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 181
                    }
                  ],
                  "start": 176,
                  "end": 182
                },
                "start": 147,
                "end": 182
              },
              "start": 144,
              "end": 182
            }
          ],
          "start": 143,
          "end": 183
        },
        "start": 136,
        "end": 183
      },
      "directive": null,
      "start": 136,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "FooArray",
    "start": 21,
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
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "FooArray",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "FooBase",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
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
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 113,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 125,
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
    "value": "Foo",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  }
]
```
