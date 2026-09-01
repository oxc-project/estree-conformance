__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "false",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 17
          }
        ],
        "start": 10,
        "end": 19
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 19
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
            "name": "x",
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
                    "name": "Bool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 33
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "false",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 39
                  },
                  "start": 29,
                  "end": 39
                },
                "typeArguments": null,
                "start": 29,
                "end": 39
              },
              "start": 27,
              "end": 39
            },
            "start": 26,
            "end": 39
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bool",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "false",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "optional": false,
            "computed": false,
            "start": 42,
            "end": 52
          },
          "definite": false,
          "start": 26,
          "end": 52
        }
      ],
      "declare": false,
      "start": 20,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Bool",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "false",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Bool",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "false",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Bool",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "false",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  }
]
```
