__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 14
                },
                "typeArguments": null,
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 28
            },
            "optional": false,
            "computed": false,
            "start": 17,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstColor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 50
                },
                "typeArguments": null,
                "start": 40,
                "end": 50
              },
              "start": 38,
              "end": 50
            },
            "start": 36,
            "end": 50
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConstColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 63
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 69
            },
            "optional": false,
            "computed": false,
            "start": 53,
            "end": 69
          },
          "definite": false,
          "start": 36,
          "end": 69
        }
      ],
      "declare": false,
      "start": 30,
      "end": 70
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 81
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "initializer": null,
            "computed": false,
            "start": 84,
            "end": 87
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 94
            },
            "initializer": null,
            "computed": false,
            "start": 89,
            "end": 94
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 100
            },
            "initializer": null,
            "computed": false,
            "start": 96,
            "end": 100
          }
        ],
        "start": 82,
        "end": 102
      },
      "const": false,
      "declare": false,
      "start": 71,
      "end": 102
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstColor",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 124
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "initializer": null,
            "computed": false,
            "start": 127,
            "end": 130
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 137
            },
            "initializer": null,
            "computed": false,
            "start": 132,
            "end": 137
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "initializer": null,
            "computed": false,
            "start": 139,
            "end": 143
          }
        ],
        "start": 125,
        "end": 145
      },
      "const": true,
      "declare": false,
      "start": 103,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Color",
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
    "value": "Green",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 36,
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
    "value": "ConstColor",
    "start": 40,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ConstColor",
    "start": 53,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 71,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "ConstColor",
    "start": 114,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 127,
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
    "value": "Green",
    "start": 132,
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
    "value": "Blue",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  }
]
```
