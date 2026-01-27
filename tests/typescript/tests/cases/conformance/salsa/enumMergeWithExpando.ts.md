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
        "name": "lf",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Order",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 100
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ASC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 106
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 103,
                    "end": 106
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DESC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 108,
                    "end": 112
                  }
                ],
                "start": 101,
                "end": 114
              },
              "const": false,
              "declare": false,
              "start": 90,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 83,
            "end": 114
          }
        ],
        "start": 77,
        "end": 116
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 117
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "lf",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 83,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 90,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Order",
    "start": 95,
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
    "value": "ASC",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "DESC",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Order",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 8
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 8
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 11,
          "end": 13
        },
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 16
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "optional": false,
            "computed": false,
            "start": 14,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DESC",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 27
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 27
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 30,
          "end": 31
        },
        "start": 14,
        "end": 31
      },
      "directive": null,
      "start": 14,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "optional": false,
            "computed": false,
            "start": 33,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ASC",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 45
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 48,
          "end": 49
        },
        "start": 33,
        "end": 49
      },
      "directive": null,
      "start": 33,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "lf",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Order",
    "start": 3,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "lf",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Order",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "DESC",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "lf",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Order",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "ASC",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
